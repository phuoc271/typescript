<template>
  <div>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
    <div class="container">
      <hr />
      <div class="row" style="height: 600px">
        <div class="col-md-3 bg-light text-left">
          <div class="bg-light">
            <button type="button" class="btn btn-success" @click="addNote()">
              + Add Note
            </button>
            <ul class="mt-4">
              <li
                class="d-flex align-items-center"
                v-for="(note, index) in listNote"
                :key="index"
                style="height: 35px; margin-left: -45px; padding-left: 10px"
                :class="{ 'bg-success text-light': note.active }"
                @click="activeNote(note, index)"
              >
                {{ note.name }}
                <span
                  class="glyphicon glyphicon-star ml-5"
                  style="margin-left: 200px;"
                  v-show="note.like"
                ></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-5 text-left" style="border-right: 0.5px solid">
          <template v-if="indexNote !== null">
            <input
              type="text"
              class="form-control border border-success d-inline"
              id="exampleInput"
              v-model="nameNote"
              style="width: 50%"
            />

            <button type="button" class="btn btn-success ml-1" @click="favoriteNote(listNote[indexNote])">
              <span
                :class="{ 'glyphicon glyphicon-star': listNote[indexNote].like, 'glyphicon glyphicon-star-empty': !listNote[indexNote].like }"
              ></span>
            </button>
            <button type="button" class="btn btn-success ml-1" @click="removeNote(indexNote)">
              <span class="glyphicon glyphicon-trash"></span>
            </button>
            <br />
            <small id="helpId" class="text-danger" v-if="checkNameError">
              Tên note không được trống hoặc trùng với note khác.
            </small>
            <textarea
              name=""
              id=""
              cols="60"
              rows="10"
              v-model="listNote[indexNote].content"
            ></textarea>
          </template>
        </div>
        <div class="col-md-4">
          <p v-if="indexNote !== null" class="text-left">
            {{ listNote[indexNote].content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BAI2",
  data() {
    return {
      listNote: [
        { name: "Note A", content: "Đây là note A", like: false, active: false },
        { name: "New Note 1", content: "Đây là New Note 1", like: false, active: false },
        { name: "New Note 2", content: "Đây là New Note 2", like: false, active: false }
      ],
      indexNote: null,
      nameNote: "",
      checkNameError: false
    };
  },
  methods: {
    activeNote(note, index) {
      this.indexNote = index;
      this.listNote.forEach(item => {
        item.active = false;
      });
      note.active = true;
      this.nameNote = note.name;
    },
    addNote() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const time = `${hours}:${minutes}:${seconds}|${day}/${month}/${year}`;
      let name = `New Note ${this.listNote.length}`;
      const checkItem = this.listNote.find(element => element.name === name);
      if (checkItem) {
        name = `${name}__${time}`;
      }
      const item = {
        name: name,
        content: `Đây là ${name}`,
        like: false,
        active: true
      };
      this.listNote.forEach(note => {
        note.active = false;
      });
      this.indexNote = this.listNote.length;
      this.nameNote = item.name;
      this.listNote.push(item);
    },
    favoriteNote(item) {
      item.like = !item.like;
      this.listNote.sort((a, b) => b.like - a.like);
      let index = 0;
      this.listNote.forEach(note => {
        if (note.active) {
          this.indexNote = index;
        }
        index++;
      });
    },
    removeNote(index) {
      this.listNote.splice(index, 1);
      this.indexNote = null;
    }
  },
  watch: {
    nameNote(newName) {
      this.checkNameError = false;
      if (newName.trim() === "") {
        this.checkNameError = true;
      } else {
        const duplicateIndex = this.listNote.findIndex((note, i) => {
          return note.name.trim() === newName.trim() && i !== this.indexNote;
        });
        if (duplicateIndex !== -1) {
          this.checkNameError = true;
        } else {
          this.listNote[this.indexNote].name = newName;
        }
      }
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
