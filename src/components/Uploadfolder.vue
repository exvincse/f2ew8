<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <div class="mb-5">
      <h2 class="mb-3">資料夾</h2>
      <div class="d-flex mb-3">
        <button class="btn btn-uploadbg text-left px-3 py-2 mr-3" data-toggle="modal" data-target="#exampleModal">
          <img src="../assets/img/folder-upload-solid.svg" width="24px" height="24px" alt="">
          <span class="ml-3">新增資料夾</span>
        </button>
        <label class="btn btn-uploadbg text-left px-3 py-2 mb-0"
          for="folderfile" style="cursor: pointer;">
          <input ref="folderfile" type="file" id="folderfile" style="width:0;height:0;opacity: 0;"
            @change="uploadfile()">
          <img src="../assets/img/file-upload-solid.svg" width="24px" height="24px" alt="">
          <span class="ml-3">上傳檔案</span>
        </label>
      </div>
      <nav v-if="breadcrumbary.length">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="#" @click.prevent="folderchild(null)">我的資料夾</a>
          </li>
          
          <li class="breadcrumb-item" v-for="(item, index) in breadcrumbary" :key="index">
            <a href="#" @click.prevent="folderparents(item, index + 1)">{{item.name}}</a>
          </li>
        </ol>
      </nav>

      <div v-else class="d-flex flex-wrap folder-wrap text-center">
        <div class="d-flex flex-column p-3 file pos-wrap" v-for="(item, index) in folder" :key="index">
          <div class="file-choose mb-3 d-flex justify-content-between">
            <a v-if="item.star" href="#" class="file-menu-click"
              @click.prevent="stared(item.name, item)">
              <img src="../assets/img/icon-star-active.svg" alt="">
            </a>
            <a v-else href="#" @click.prevent="stared(item.name, item)">
              <img src="../assets/img/icon-star.svg" alt="">
            </a>
            <a href="#" class="file-menu-click">
              <img src="../assets/img/more.svg" width="24px" height="24px" alt="">
              <ul class="file-menu">
                <li><a href="#" @click.prevent="edit=item.id">重新命名</a></li>
                <li><a href="#" @click.prevent="throwtrash(item.name, item)">垃圾桶</a></li>
              </ul>
            </a>
          </div>
          <div class="pos-wrap">
            <a class="folder-link" href="#"
              @click.prevent="parentspath=item.path,folderchild(item.name)"></a>
            <i class="far fa-folder-open fa-5x"></i>
          </div>
          <div v-if="item.id === edit" class="input-group">
            <input v-model="editfoldername" type="text" class="form-control input-group-prepend"
            @keyup.enter="editfolder(item.name, item)">
            <a href="#" class="btn btn-uploadbg" @click.prevent="editfolder(item.name, item)">更改</a>
          </div>
          <span v-else>{{item.name}}</span>
        </div>
      </div>

      <div class="d-flex flex-wrap folder-wrap">
        <div class="d-flex flex-column file pos-wrap text-center"
          v-for="(item, index) in childdata" :key="index">
          <div class="text-center p-3">

            <div class="file-choose mb-3 d-flex justify-content-between">
              <a v-if="item.star" href="#" class="file-menu-click"
                @click.prevent="stared(item.key, item)">
                <img src="../assets/img/icon-star-active.svg" alt="">
              </a>
              <a v-else href="#" @click.prevent="stared(item.key, item)">
                <img src="../assets/img/icon-star.svg" alt="">
              </a>
              <a href="#" class="file-menu-click">
                <img src="../assets/img/more.svg" width="24px" height="24px" alt="">
                <ul class="file-menu">
                  <li v-if="item.name"><a :href="item.fileUrl">下載</a></li>
                  <li v-if="item.name"><a href="#" @click.prevent="edit=item.key,editname=item.name">重新命名</a></li>
                  <li v-else><a href="#" @click.prevent="edit=item.key,editname=item.key">重新命名</a></li>
                  <li><a href="#" @click.stop.prevent="throwtrash(item.key, item)">垃圾桶</a></li>
                </ul>
              </a>
            </div>

            <div class="pos-wrap">
              <a v-if="!item.name" class="folder-link" href="#"
                  @click.prevent="folderchild(item.key,item.id)"></a>
              <i v-if="item.type === 'pdf'" class="fas fa-file-pdf fa-5x"></i>
              <i v-else-if="item.type === 'zip' || item.type === 'rar'" class="fas fa-file-archive fa-5x"></i>
              <i v-else class="far fa-folder-open fa-5x"></i>
            </div>
          </div>
          <div v-if="item.key === edit" class="input-group">
            <template v-if="edit === editname">
              <input v-model="editfoldername" type="text" class="form-control input-group-prepend"
              @keyup.enter="editfolder(item.key, null, item.id)">
              <a href="#" class="btn btn-uploadbg" @click.prevent="editfolder(item.key, null, item.id)">更改</a>
            </template>

            <template v-else>
              <input v-model="editname" type="text" class="form-control input-group-prepend"
              @keyup.enter="editfilename(item,item.path,item.key)">
              <a href="#" class="btn btn-uploadbg" @click.prevent="editfilename(item,item.path,item.key)">更改</a>
            </template>
          </div>
          <div v-else>
            <span v-if="item.name">{{item.name}}</span>
            <span v-else>{{item.key}}</span>
          </div>
        </div>
      </div>

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content text-primary">
            <div class="modal-header bg-uploadbg">
              <h5 class="modal-title" id="exampleModalLabel">新增資料夾</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <input type="text" class="form-control" v-model="addfoldername">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary"
              @click="addfolder()">新增</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  props: ['propsfolder', 'buspath'],
  data() {
    return {
      isLoading: false,
      folderdata: [],
      folderchilddata: [],
      breadcrumb: false,
      breadcrumbary: [],
      file: {},
      edit: '',
      editname: '',
      editfoldername: '',
      addfoldername: '',
      parentspath: '',
    };
  },
  created() {
    this.getfolder();
    // if (this.buspath === undefined) return false;
    // let ary = this.buspath.split('/');
    // for(let i = 2; i < ary.length; i++){
    //   if (ary[i].includes('-')) return false;
    //   console.log(ary[i])
    //   this.breadcrumbary.push({
        
    //   });
    // }
    // console.log(this.breadcrumbary)
  },
  computed: {
    folder() {
      return this.folderdata.filter((item) => {
        if (item.key === 'trash') return false;
        if (item.key === 'star') return false;
        if (item.trash === undefined) item.trash = false;
        if (item.star === undefined) item.star = false;
        return item.trash === false;
      }).sort((a, b) => {
        return b.star - a.star;
      });
    },
    childdata() {
      return this.folderchilddata.filter((item) => {
        if (item.key === 'trash' || item.key === 'star') return false;
        if (item.trash === undefined) item.trash = false;
        if (item.star === undefined) item.star = false;
        if (item.type === undefined) item.sort = 1000;
        if (item.sort === undefined) item.sort = 0;
        return item.trash === false;
      }).sort((a, b) => {
        return b.star - a.star;
      }).sort((a, b) => {
        return b.sort - a.sort;
      });
    },
  },
  watch: {
    propsfolder() {
      this.uploadfolder();
    },
  },
  methods: {
    addfolder() {
      if (this.addfoldername === '') return false;
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      let allpath = '';
      let updatepath = '';
      const timestamp = Math.floor(new Date());
      if (this.parentspath === '') {
        allpath = `folder/${timestamp}`;
        updatepath = `folder/${timestamp}`;
      } else {
        allpath = `${this.parentspath}${path}`;
        updatepath = `${this.parentspath}${path}`;
      }
      const obj = {};
      obj[this.addfoldername] = {
        trash: false,
      };
      this.$firebase.database().ref(allpath).push(obj);
      this.breadcrumbary.length === 0 ? this.getfolder() : this.updatechild(updatepath);
      this.addfoldername === '';
      $('#exampleModal').modal('hide');
    },
    editfolder(key, item, id) {
      if (this.editfoldername === '') return false;
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      let allpath = '';
      let updatepath = '';
      if (this.parentspath === '') {
        allpath = `${item.path}/${item.name}`;
        updatepath = `${item.path}`;
      } else {
        key === id ? allpath = `${this.parentspath}${path}/${key}` : allpath = `${this.parentspath}${path}/${id}/${key}`;
        updatepath = `${this.parentspath}${path}`;
      }
      const obj = {};
      this.$firebase.database().ref(allpath).on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        obj[this.editfoldername] = snapshot.val();
        return true;
      });
      let a = {};
      const keyobj = {};
      keyobj[id] = obj;
      // key === id ? a = keyobj : a = obj;
      this.$firebase.database().ref(allpath).remove();
      this.$firebase.database().ref(updatepath).update(obj);
      this.breadcrumbary.length === 0 ? this.getfolder() : this.updatechild(updatepath);
      this.editfoldername = '';
      this.edit = '';
    },
    editfilename(item, pathurl, key) {
      if (this.editname === '') return false;
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      this.$firebase.database().ref(`${this.parentspath}${path}/${key}`).update({
        name: this.editname,
      });
      this.updatechild(`${this.parentspath}${path}`);
      this.edit = '';
      this.editname = '';
    },
    stared(key, item) {
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      if (item.name === undefined) item.name = key;
      if (item.type === undefined) item.type = 'folder';
      let allpath = '';
      let updatepath = '';
      if (this.parentspath === '') {
        allpath = `${item.path}/${item.name}`;
        updatepath = `${item.path}`;
      } else {
        if (item.key === item.id) {
          allpath = `${this.parentspath}${path}/${key}`
        } else {
          if (item.id === undefined) {
            allpath = `${this.parentspath}${path}/${key}`;
          } else {
            allpath = `${this.parentspath}${path}/${item.id}/${key}`;
          }
        }
        updatepath = `${this.parentspath}${path}`;
      }
      if (!item.star === false) {
        this.$firebase.database().ref(`/star`).on('value',(snapshot) => {
          if (snapshot.val() === null) return false;
          const val = Object.values(snapshot.val());
          const key = Object.keys(snapshot.val());
          let id = '';
          val.forEach((data,index) => {
            if (data.path === allpath) {
              this.$firebase.database().ref(`/star/${key[index]}`).remove();
            }
          })
        });
      } else {
        this.$firebase.database().ref('/star').push({
          name: item.name,
          type: item.type,
          path: allpath,
        });
      }
      this.$firebase.database().ref(allpath).update({
        star: !item.star,
      })
      this.breadcrumbary.length === 0 ? this.getfolder() : this.updatechild(updatepath);
    },
    throwtrash(key, item) {
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      if (item.name === undefined) item.name = key;
      if (item.type === undefined) item.type = 'folder';
      let allpath = '';
      let updatepath = '';
      if (this.parentspath === '') {
        allpath = `${item.path}/${item.name}`;
        updatepath = `${item.path}`;
      } else {
        if (item.key === item.id) {
          allpath = `${this.parentspath}${path}/${key}`
        } else {
          if (item.id === undefined) {
            allpath = `${this.parentspath}${path}/${key}`;
          } else {
            allpath = `${this.parentspath}${path}/${item.id}/${key}`;
          }
        }
        updatepath = `${this.parentspath}${path}`;
      }
      this.$firebase.database().ref(allpath).update({
        trash: true,
      });
      this.$firebase.database().ref('/trash').push({
        name: item.name,
        type: item.type,
        path: allpath,
      });
      this.breadcrumbary.length === 0 ? this.getfolder() : this.updatechild(updatepath);
    },
    folderparents(item, keys) {
      this.breadcrumbary.splice(keys, this.breadcrumbary.length - keys);
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      this.folderchilddata = [];
      this.$firebase.database().ref(`${this.parentspath}${path}`).on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        const val = Object.values(snapshot.val());
        const key = Object.keys(snapshot.val());
        key.forEach((item, index) => {
          if (val[index].path === undefined) {
            let name = '';
            let trash = '';
            let star = '';
            if (item === 'trash') return false;
            if (item === 'star') return false;
            if (item.includes('-')) {
              name = Object.keys(val[index])[0];
              star = Object.values(val[index])[0].star || false;
              trash = Object.values(val[index])[0].trash || false;
            } else {
              name = item;
              star = val[index].star || false;
              trash = val[index].trash || false;
            }
            this.folderchilddata.push({
              key: name,
              id: item,
              star,
              trash,
            });
          } else {
            this.folderchilddata.push({
              name: val[index].name,
              type: val[index].type,
              fileUrl: val[index].fileUrl,
              path: val[index].path,
              star: val[index].star,
              trash: val[index].trash,
            });
          }
        });
        return true;
      });
    },
    folderchild(name, pathid) {
      if (name === pathid) {
        this.breadcrumbary.push({
          name,
        });
      } else if (pathid) {
        this.breadcrumbary.push({
          name,
          pathid,
        });
      } else {
        this.breadcrumbary.push({
          name,
        });
      }
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }

      this.folderchilddata = [];
      if (name === null) {
        this.breadcrumbary = [];
        this.parentspath = '';
        this.getfolder();
        return false;
      }

      this.$firebase.database().ref(`${this.parentspath}${path}`).on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        this.breadcrumb = true;
        const val = Object.values(snapshot.val());
        const key = Object.keys(snapshot.val());
        key.forEach((item, index) => {
          if (val[index].path === undefined) {
            let name = '';
            let trash = '';
            let star = '';
            if (item === 'trash') return false;
            if (item === 'star') return false;
            if (item.includes('-')) {
              name = Object.keys(val[index])[0];
              star = Object.values(val[index])[0].star || false;
              trash = Object.values(val[index])[0].trash || false;
            } else {
              name = item;
              star = val[index].star || false;
              trash = val[index].trash || false;
            }
            this.folderchilddata.push({
              key: name,
              id: item,
              star,
              trash,
            });
          } else {
            this.folderchilddata.push({
              key: item,
              name: val[index].name,
              type: val[index].type,
              fileUrl: val[index].fileUrl,
              path: val[index].path,
              star: val[index].star,
              trash: val[index].trash,
            });
          }
        });
      });
      return true;
    },
    updatechild(pathurl) {
      this.isLoading = true;
      this.$firebase.database().ref(pathurl).on('value', (snapshot) => {
        this.folderchilddata = [];
        if (snapshot.val() === null) return false;
        const val = Object.values(snapshot.val());
        const key = Object.keys(snapshot.val());
        key.forEach((item, index) => {
          if (val[index].path === undefined) {
            let name = '';
            let trash = '';
            let star = '';
            if (item === 'trash') return false;
            if (item.includes('-')) {
              name = Object.keys(val[index])[0];
              star = Object.values(val[index])[0].star || false;
              trash = Object.values(val[index])[0].trash || false;
            } else {
              name = item;
              star = val[index].star || false;
              trash = val[index].trash || false;
            }
            this.folderchilddata.push({
              key: name,
              id: item,
              star,
              trash,
            });
            return true;
          } else {
            this.folderchilddata.push({
              key: item,
              name: val[index].name,
              type: val[index].type,
              fileUrl: val[index].fileUrl,
              path: pathurl,
              star: val[index].star,
              trash: val[index].trash,
            });
          }
        });
        this.isLoading = false;
      });
      return true;
    },
    updatefile() {
      let path = '';
      for (let i = 0; i<this.breadcrumbary.length; i++) {
        if (this.breadcrumbary[i].pathid) {
          path = `${path}/${this.breadcrumbary[i].pathid}/${this.breadcrumbary[i].name}`;
        } else {
          path = `${path}/${this.breadcrumbary[i].name}`;
        }
      }
      let allpath = '';
      let updatepath = '';
      if (this.parentspath === '') {
        return false;
      }
      allpath = `${this.parentspath}${path}`;
      updatepath = `${this.parentspath}${path}`;
      this.file.path = allpath;
      const starCountRef = this.$firebase.database().ref(allpath);
      starCountRef.push(this.file);
      this.breadcrumbary.length === 0 ? this.getfolder() : this.updatechild(updatepath);
      return true;
    },
    uploadfile() {
      if (this.parentspath === '') {
        $('#file').val('');
        return false;
      }
      const firebase = this.$firebase.storage().ref();
      const file = this.$refs.folderfile.files[0];
      let filefilter = file.type.split('/')[1];
      if (filefilter !== 'pdf' && filefilter !== 'zip' && filefilter !== 'rar'){
        alert('請暫時不要上傳不是PDF,zip,rar格式檔案');
        $('#file').val('');
        return false;
      }
      const uploadTask = firebase.child(`file/${file.name}`).put(file);
      uploadTask.on('state_changed', (snapshot) => {
        const start = (snapshot.bytesTransferred / 1000000).toFixed(1);
        const total = (snapshot.totalBytes / 1000000).toFixed(1);
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 234;
        this.$emit('uploadmsg', start, total, progress, true);
      }, () => {
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.file = {
            fileUrl: downloadURL,
            name: file.name,
            type: file.type.split('/')[1],
            star: false,
            trash: false,
          };
        }).then(() => {
          this.$emit('uploadmsg', 0, 0, 0, false);
          this.updatefile();
        });
      });
      $('#file').val('');
      return true;
    },
    getfolder() {
      this.isLoading = true;
      this.folderdata = [];
      this.$firebase.database().ref('/folder').on('value', (snapshot) => {
        if (snapshot.val() === null) return false;
        const val = Object.values(snapshot.val());
        const key = Object.keys(snapshot.val());
        key.forEach((item, index) => {
          let name = '';
          let path = '';
          let star = '';
          let trash = '';
          if (Object.keys(val[index])[0].includes('-')) {
            star = Object.values(Object.values(val[index])[0])[0].star;
            trash = Object.values(Object.values(val[index])[0])[0].trash;
            name = Object.keys(Object.values(val[index])[0])[0];
            path = `folder/${item}/${Object.keys(val[index])[0]}`;
          } else {
            star = Object.values(val[index])[0].star;
            trash = Object.values(val[index])[0].trash;
            name = Object.keys(val[index])[0];
            path = `folder/${item}`;
          }
          this.folderdata.push({
            path,
            id: item,
            name,
            star,
            trash,
          });
        });
        this.isLoading = false;
        return true;
      });
    },
    updatefolder(ary) {
      ary.forEach((item) => {
        const starCountRef = this.$firebase.database().ref(`${item.path}`);
        starCountRef.push({
          name: item.name,
          type: item.type,
          fileUrl: item.url,
          path: item.path,
          star: false,
          trash: false,
        });
        this.getfolder();
      });
    },
    uploadfolder() {
      const folder = Array.prototype.slice.call(this.propsfolder);
      const firebase = this.$firebase.storage().ref();
      const id = Math.floor(new Date()).toString();
      try {
         folder.forEach((item) => {
            let filefilter = item.type.split('/')[1];
            if (filefilter !== 'pdf' && filefilter !== 'zip' && filefilter !== 'rar'){
              throw new Error()
            }
         })
      } catch (error) {
        alert('請暫時不要上傳不是PDF,zip,rar格式檔案');
        $('#folder').val('');
        return false;
      }
      folder.forEach((item) => {
        const ary = [];
        const uploadTask = firebase.child(`folder/${id}/${item.webkitRelativePath}`).put(item);
        uploadTask.on('state_changed', (snapshot) => {
          const start = (snapshot.bytesTransferred / 1000000).toFixed(1);
          const total = (snapshot.totalBytes / 1000000).toFixed(1);
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 234;
          this.$emit('uploadmsg', start, total, progress, true);
        }, () => {
        }, () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            ary.push({
              path: uploadTask.snapshot.ref.parent.location.path,
              name: item.name,
              type: item.type.split('/')[1],
              url: downloadURL,
            });
          }).then(() => {
            this.$emit('uploadmsg', 0, 0, 0, false);
            this.updatefolder(ary);
          });
        });
      });
      $('#folder').val('');
    },
  },
};
</script>
