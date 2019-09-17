<template>
  <div>
    <div class="py-5 px-3 bg-primary" style="position:fixed;width:210px;height:100%;">
        <div class="logo"></div>
        <label v-if="flag" class="btn btn-uploadbg upload text-left px-3 py-2 my-4"
          for="file" style="cursor: pointer;">
          <input ref="file" type="file" id="file" style="width:0;height:0;opacity: 0;"
            @change="uploadfile()">
          <img src="../assets/img/file-upload-solid.svg" width="24px" height="24px" alt="">
          <span class="ml-3">上傳檔案</span>
        </label>

        <router-link to="/index" class="btn text-white upload text-left px-3 py-2 mb-3">
          <img src="../assets/img/icon-folder-upload.svg" width="24px" height="24px" alt="">
          <span class="ml-3">所有檔案</span>
        </router-link>

        <label v-if="flag" class="btn text-white upload text-left px-3 py-2 mb-3"
          for="folder" style="cursor: pointer;">
          <input ref="folder" type="file" id="folder" style="width:0;height:0;opacity: 0;"
            @change="uploadfolder()" webkitdirectory>
          <img src="../assets/img/icon-folder-upload.svg" width="24px" height="24px" alt="">
          <span class="ml-3">上傳資料夾</span>
        </label>

        <router-link to="/index/star" class="btn text-white upload text-left px-3 py-2 mb-3">
          <img src="../assets/img/icon-star.svg" width="24px" height="24px" alt="">
          <span class="ml-3">已標記星號</span>
        </router-link>

        <router-link to="/index/trash" class="btn text-white upload text-left px-3 py-2 mb-4">
          <img src="../assets/img/icon-trash.svg" width="24px" height="24px" alt="">
          <span class="ml-3">垃圾桶</span>
        </router-link>
    </div>

    <div class="text-white p-4 right-bg" style="margin-left:210px;min-height:100vh;">
      <div v-if="flag">
        <uploadfolder
          @uploadmsg="uploadmsg"
          :propsfolder="propsfolder"
          :buspath="$route.query.path"></uploadfolder>
        <uploadfile
          @uploadmsg="uploadmsg"
          :propsfile="propsfile"></uploadfile>
      </div>
      <router-view v-else></router-view>
    </div>

    <div v-if="uploadprogress.progressshow">
      <div class="helper-upload"></div>
      <div class="upload-msg d-flex flex-column text-center py-3 px-5">
        <h3>檔案上傳</h3>
        <span>剩餘5秒</span>
        <div class="d-flex justify-content-between mb-3">
        <span>
          {{uploadprogress.start}}MB
        </span>
        <span>
          {{uploadprogress.total}}MB
        </span>
        </div>
        <div class="progess"
          :style="{ width: uploadprogress.progress + 'px'}"></div>
      </div>
    </div>
    <div v-else class="helper"></div>
  </div>
</template>

<script>
import $ from 'jquery';
import uploadfile from './Uploadfile.vue';
import uploadfolder from './Uploadfolder.vue';

export default {
  components:{
    uploadfile,
    uploadfolder,
  },
  data() {
    return {
      flag: true,
      filedata: [],
      uploadprogress: {
        progressshow: false,
        progress: 0,
        start: 0,
        total: 0,
      },
      propsfolder: [],
      propsfile: [],
    };
  },
  watch: {
    '$route'(to, from) {
      if (to.path !== '/index') {
        this.flag = false;
      } else {
        this.flag = true;
      }
      // if (this.$route.query.path === undefined) return false;
    },
    immediate: true,
  },
  methods: {
    uploadfile() {
      this.propsfile = this.$refs.file.files[0];
    },
    uploadfolder() {
      this.propsfolder = this.$refs.folder.files;
    },
    uploadmsg(start, total, progress, progressshow) {
      this.uploadprogress.start = start;
      this.uploadprogress.total = total;
      this.uploadprogress.progress = progress;
      this.uploadprogress.progressshow = progressshow;
    },
  },
};
</script>

<style lang="scss">
  .right-bg{
    background-color: #25272C;
  }
  .logo{
    background-image: url('../assets/img/logo.svg');
    width: 120px;
    height: 40px;
    margin: 0 auto;
  }
</style>
