<template>
  <div class="text-white p-4 right-bg" style="min-height:100vh">
    <div class="d-flex flex-wrap folder-wrap">
      <div class="d-flex flex-column file text-white text-center"
        v-for="item in totaldata" :key="item.key">
        <div class="text-center p-3">
          <div class="file-choose mb-3 d-flex justify-content-end">
            <a href="#" class="file-menu-click">
              <img src="../assets/img/more.svg" width="24px" height="24px" alt="">
              <ul class="file-menu">
                <li><a href="#" @click.prevent="reset(item)">還原</a></li>
                <li><a href="#" @click.prevent="del(item)">刪除</a></li>
              </ul>
            </a>
          </div>
          <i v-if="item.val.type === 'pdf'" class="fas fa-file-pdf fa-5x"></i>
          <i v-else-if="item.val.type === 'zip' || item.val.type === 'rar'" class="fas fa-file-archive fa-5x"></i>
          <i v-else class="far fa-folder-open fa-5x"></i>
        </div>
        <span>{{item.val.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totaldata: [],
    }
  },
  created() {
    this.trashdata();
  },
  methods: {
    trashdata() {
      this.$firebase.database().ref('/trash').on('value',(data) => {
        this.totaldata = [];
        if (data.val() === null) return false;
        let key = Object.keys(data.val());
        let val = Object.values(data.val());
        key.forEach((item, index) => {
          this.totaldata.push({
            key: item,
            val: val[index],
          });
        });
        return true;
      });
    },
    del(item) {
      this.$firebase.database().ref(`${item.val.path}`).remove();
      this.$firebase.database().ref(`/trash/${item.key}`).remove();
      this.trashdata();
    },
    reset(item) {
      this.$firebase.database().ref(`${item.val.path}`).update({
        trash: false,
      });
      this.$firebase.database().ref(`/trash/${item.key}`).remove();
      this.trashdata();
    },
  },
}
</script>