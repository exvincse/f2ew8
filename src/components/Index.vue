<template>
  <div>
    <div class="py-5 px-3 bg-primary" style="position:fixed;width:210px;height:100%;">
        <div class="logo"></div>
        <label class="btn btn-uploadbg upload text-left px-3 py-2 my-4"
          for="file" style="cursor: pointer;">
          <input ref="file" type="file" id="file" style="width:0;height:0;opacity: 0;"
            @change="uploadfile()">
          <img src="../assets/img/file-upload-solid.svg" width="24px" height="24px" alt="">
          <span class="ml-3">上傳檔案</span>
        </label>
        <button class="btn text-white upload text-left px-3 py-2 mb-3"
          @click="choose = 'all'">
          <img src="../assets/img/icon-folder-upload.svg" width="24px" height="24px" alt="">
          <span class="ml-3">所有檔案</span>
        </button>

        <label class="btn text-white upload text-left px-3 py-2 mb-3"
          for="folder" style="cursor: pointer;">
          <input ref="folder" type="file" id="folder" style="width:0;height:0;opacity: 0;"
            @change="uploadfolder()" webkitdirectory>
          <img src="../assets/img/icon-folder-upload.svg" width="24px" height="24px" alt="">
          <span class="ml-3">上傳資料夾</span>
        </label>

        <button class="btn text-white upload text-left px-3 py-2 mb-3"
          @click="choose = 'star'">
          <img src="../assets/img/icon-star.svg" width="24px" height="24px" alt="">
          <span class="ml-3">已標記星號</span>
        </button>

        <button class="btn text-white upload text-left px-3 py-2 mb-4"
          @click="choose = 'trash'">
          <img src="../assets/img/icon-trash.svg" width="24px" height="24px" alt="">
          <span class="ml-3">垃圾桶</span>
        </button>
    </div>

    <div v-if="choose === 'all'" class="text-white p-4 right-bg" style="margin-left:210px;min-height:100vh;">
      <uploadfolder
        @uploadmsg="uploadmsg"
        :propsfolder="propsfolder"></uploadfolder>
      <uploadfile
        @uploadmsg="uploadmsg"
        :propsfile="propsfile"></uploadfile>
    </div>
    <star v-else-if="choose === 'star'" style="margin-left:210px;"></star>
    <trash v-else-if="choose === 'trash'" style="margin-left:210px;"></trash>

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
import trash from './Trash.vue';
import star from './Star.vue';

export default {
  components:{
    uploadfile,
    uploadfolder,
    trash,
    star,
  },
  data() {
    return {
      choose: 'all',
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
