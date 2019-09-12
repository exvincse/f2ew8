<template>
  <div>
    <h2 class="mb-3">檔案</h2>
    <div class="d-flex flex-wrap folder-wrap">
      <div class="d-flex flex-column file"
        v-for="(item, index) in totaldata" :key="index">
        <div class="text-center p-3">
          <div class="file-choose mb-3 d-flex justify-content-between">
            <a v-if="item.star" href="#" class="file-menu-click"
              @click.prevent="stared(item)">
              <img src="../assets/img/icon-star-active.svg" alt="">
            </a>
            <a v-else href="#" @click.prevent="stared(item)">
              <img src="../assets/img/icon-star.svg" alt="">
            </a>

            <a href="#" class="file-menu-click">
              <img src="../assets/img/more.svg" width="24px" height="24px" alt="">
              <ul class="file-menu">
                <li><a :href="item.fileUrl">下載</a></li>
                <li><a href="#" @click.prevent="edit=item.id,editname=item.name">重新命名</a></li>
                <li><a href="#" @click.prevent="throwtrash(item)">刪除</a></li>
              </ul>
            </a>
          </div>
          <i v-if="item.type === 'pdf'" class="fas fa-file-pdf fa-5x"></i>
          <i v-else-if="item.type === 'zip' || item.type === 'rar'" class="fas fa-file-archive fa-5x"></i>
        </div>
        <div v-if="item.id === edit" class="input-group">
          <input v-model="editname" type="text" class="form-control input-group-prepend"
          @keyup.enter="editfilename(item)"
          >
          <a href="#" class="btn btn-uploadbg" @click.prevent="editfilename(item)">更改</a>
        </div>
        <span v-else>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['propsfile'],
  data() {
    return {
      filedata: [],
      file: {},
      edit: '',
      editname: '',
    };
  },
  watch: {
    propsfile() {
      this.uploadfile();
    }
  },
  created() {
    this.getfile();
  },
  computed: {
    totaldata() {
      return this.filedata.filter((item) => {
        return item.trash === false;
      }).sort((a, b) => {
        return b.star - a.star;
      });
    },
  },
  methods: {
    editfilename(item) {
      this.$firebase.database().ref(`file/${item.id}`).update({
        name: this.editname,
      }).then(() => {
        this.getfile();
        this.edit = '';
      });
    },
    getfile() {
      this.$firebase.database().ref('/file').on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        this.filedata = [];
        const key = Object.keys(snapshot.val());
        const val = Object.values(snapshot.val());
        key.forEach((item, index) => {
          this.filedata.push({
            id: item,
            name: val[index].name,
            fileUrl: val[index].fileUrl,
            type: val[index].type,
            star: val[index].star,
            trash: val[index].trash,
          });
        });
        return true;
      });
    },
    updatefile() {
      const starCountRef = this.$firebase.database().ref('file');
      starCountRef.push(this.file).then(() => {
        this.getfile();
      });
    },
    uploadfile() {
      const firebase = this.$firebase.storage().ref();
      const uploadTask = firebase.child(`file/${this.propsfile.name}`).put(this.propsfile);
      uploadTask.on('state_changed', (snapshot) => {
        let start = (snapshot.bytesTransferred / 1000000).toFixed(1);
        let total = (snapshot.totalBytes / 1000000).toFixed(1);
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 234;
        this.$emit('uploadmsg', start, total, progress, true);
      }, () => {
        
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.file = {
            fileUrl: downloadURL,
            name: this.propsfile.name,
            type: this.propsfile.type.split('/')[1],
            star: false,
            trash: false,
          };
        }).then(() => {
          this.$emit('uploadmsg', 0, 0, 0, false);
          this.updatefile();
        });
      });
      $('#file').val('');
    },
    stared(item) {
      this.$firebase.database().ref(`file/${item.id}`).update({
        star: !item.star,
      });
      this.getfile();
    },
    throwtrash(item) {
      this.$firebase.database().ref(`file/${item.id}`).update({
        trash: true,
      });
      this.$firebase.database().ref(`trash`).push({
        name: item.name,
        type: item.type,
        path: `file/${item.id}`,
      });
      this.getfile();
    },
  },
}
</script>