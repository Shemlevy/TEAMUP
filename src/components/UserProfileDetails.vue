<template>
    <section>
      <v-layout row>
    <v-flex>
      <v-card>

        <v-card-media v-if="proxyUser.imgUrl" :src="proxyUser.imgUrl" height="350px">
        </v-card-media>
        <v-card-media v-if="!proxyUser.imgUrl" src="https://cdn4.iconfinder.com/data/icons/social-communication/142/add_user-512.png" height="350px">
        </v-card-media>
          <div class="profile-btns">
            <v-btn v-show="edit" class="saveBtn" fab dark small color="primary" @click="uploadImg"><v-icon>add_a_photo</v-icon></v-btn>
              <input ref="inputFile" class="file-input"  type="file" @change="addPhoto" />
            <v-btn v-if="edit" class="saveBtn" fab dark small color="green" @click="updateProfile"><v-icon>done</v-icon></v-btn>
            <v-btn v-if="edit" class="cancel-btn"  fab dark small color="red" @click="undoUpdate"><v-icon>clear</v-icon></v-btn>
            <v-btn fab color="red" @click="edit = true"><v-icon color="white">edit</v-icon></v-btn>
          </div>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <input type="text" :class="{ editable: edit}" required="true" :readonly="!edit" v-model="proxyUser.name" placeholder="Name">
            </div>
            <div class="headline">
              <input type="text" required="true" readonly :value="proxyUser.email" placeholder="Email">
            </div>
            <div class="headline">
              <input type="text" :class="{ editable: edit}" :readonly="!edit" v-model="proxyUser.phone" placeholder="Phone">
            </div>
            <span class="grey--text">
              <textarea rows="3" cols="35" type="text" :class="{ editable: edit}" :readonly="!edit" v-model="proxyUser.about" placeholder="About"></textarea>
            </span>
          </div>
        </v-card-title>
        <v-card-actions>
          <button class="logout-btn" @click="emitLogout">Logout</button>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-slide-y-transition>
        </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
</template>

<script>
import UserService from "../service/user/UserService";
export default {
  props: ["user"],
  data() {
    return {
      proxyUser: {},
      edit: false,
    };
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    updateProfile() {
      this.$emit("updateUserProfile", this.proxyUser);
      this.edit = false;
    },
    emitLogout(){
      this.$emit('userLogout')
    },
    undoUpdate() {
      this.proxyUser = this.duplicateUser(this.user);
      this.edit = false;
    },
    duplicateUser(user) {
      var userStr = JSON.stringify(user);
      return JSON.parse(userStr);
    },
    addPhoto({ target }) {
      if (target.files.length === 0) return;
      var file = target.files;
      UserService.uploadImage(file[0])
        .then(imgUrl => {
          this.proxyUser.imgUrl = imgUrl;
        })
        .catch(err => {
          console.error("error adding photo:", err);
        });
    },
    uploadImg() {
      this.$refs.inputFile.click();
    }
  },
  created() {
    this.proxyUser = this.duplicateUser(this.user);
  }
};
</script>

<style scoped>
textarea {
  display: block;
  margin: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  font-family: var(--secondery-font);
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0);
}

input {
  display: block;
  margin: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0);
  transition: all 0.3s ease-in-out;
  font-size: 20px;
  font-family: var(--secondery-font);
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0);
}

.profile-btns {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
}

.editable {
  transition: all 0.3s ease-in-out;
  border: 2px solid peru;
}

.file-input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.logout-btn{
  font-size: 25px;
  color:red;
  margin: 0 0 10px 20px;
}
</style>
