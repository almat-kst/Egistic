<template>
  <div>
    <ModalResume v-if="modalResume" @closeModal="closeInfoModal"></ModalResume>
    <div class="just_empty">
      <div class="just_empty_one"></div>
    </div>
    <p class="resume_text">Некоторые поля были автоматически заполнены. Проверьте данные и заполните пустые поля.</p>
    <div class="resume_inner">

      <div class="fio_box">
        <input class="input name_input" placeholder="Имя" type="text" required v-model="name">
        <input class="input lastname_input" placeholder="Фамилия" type="text" required v-model="lastName">
        <input class="input date_input"  placeholder="ДД.ММ.ГГГГ" type="date" required v-model="date">
      </div>

      <div class="info_box">
        <h4 class="info_poul">Пол*</h4>

        <div class="info_poul_box">
          <div class="kind_poul" v-for="item in getGender" :key="item">
            <input :value="item.gender" class="input_poul" type="radio" required v-model="gender">
            <label class="poul_text">{{item.gender}} </label>
          </div>
        </div>

        <div class="living_place">Город проживания</div>
        <select class="select_place" name="" id="" v-model="city" required>
          <option value="" checked>Выберите город</option>
          <option v-for="item in getCities" :key="item">{{item.city}}</option>
        </select>

        <a class="geo">
          <img class="geo_img" src="@/assets/resume/share.png" alt="">
          <p class="geo_text">Определить автоматически</p>
        </a>
      </div>

      <div class="post_box">
        <div class="living_place">Желаемая должность</div>
        <select class="select_place" name="" id="" v-model="category" required>
          <option value="" checked>Выберите категорию</option>
          <option v-for="item in getCategory" :key="item">{{item.category}}</option>
        </select>
        <input class="input salary_input" placeholder="Желаемая Зарплата" type="text" v-model="salary"  required>
      </div>
    </div>

    <div class="resume_buttons">
      <button class="button" @click="showModal">ОТМЕНА</button>
      <button class="button active" @click.prevent="secondResume">ДАЛЕЕ</button>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import ModalResume from '@/components/resume/ModalResume'

export default {
  name: 'FirstResume',
  components: {
    ModalResume
  },
  data: () => ({
    modalResume: false,
    name: '',
    lastName: '',
    date: '',
    gender: '',
    city: '',
    category: '',
    salary: ''
  }),
  computed: {
    ...mapGetters(['getGender', 'getCities', 'getCategory'])
  },
  mounted(){
    this.actionGetGender()
    this.actionCities()
    this.actionGetCategory()
  },
  methods: {
    ...mapActions(['actionGetGender', 'actionCities', 'actionGetCategory', 'actionFirstResume']),
    showModal(){
      this.modalResume = !this.modalResume
    },
    closeInfoModal(){
      this.modalResume = !this.modalResume
    },
    secondResume(){
      const data = {
        name: this.name,
        lastName: this.lastName,
        date: this.date,
        gender: this.gender,
        city: this.city,
        category: this.category,
        salary: this.salary
      }
      this.actionFirstResume(data)
      this.$router.push({name: 'SecondResume'})
    }
  }
}
</script>

<style scoped>
.just_empty{
  position: relative;
  width: 1060px;
  height: 6px;
  background: #EBECE6;
  border-radius: 9px;
  margin-bottom: 35px;
  cursor: pointer;
}

.just_empty:after{
  position: absolute;
  content: "";
  width: 12px;
  height: 12px;
  top: -4px;
  font-size: 35px;
  font-weight: 700;
  color: red;
  left: 100px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid red;
}

.just_empty:before{
  position: absolute;
  width: 104px;
  height: 6px;
  content: "";
  background-color: red;
  border-radius: 9px;
}

.resume_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 20px;
}


.resume_inner{
  display: flex;
  margin-bottom: 30px;
}

.input{
  width: 320px;
  height: 48px;
  padding: 6px 16px;

  border: 1px solid #E0E2D8;
  outline: none;
  border-radius: 6px;
  margin-bottom: 28px;
  color: #000;
}

.info_box{
  width: 900px;
}

.info_poul_box{
  display: flex;
}

.kind_poul{
  display: flex;
  align-items: center;
}

.info_poul{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.kind_poul{
  margin-bottom: 20px;
  margin-right: 66px;
}

.poul_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1C1C1C;
  margin-left: 10px;
}

.living_place{
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 4px;
}

.select_place{
  width: 320px;
  height: 48px;

  background: #F1F8EC;
  border-radius: 6px;
  outline: none;
  padding: 14px 16px;
  margin-bottom: 13px;
  border: none;
}

.geo{
  display: flex;
  align-items: center;
}

.geo_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #4B970F;
}

.geo_text{
  margin-left: 12px;
}

.resume_buttons{
  position: absolute;
  right: 0;
  margin-bottom: 10px;
}

.button{
  width: 160px;
  height: 40px;

  border: 1px solid #878882;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 15px;
  color: #878882;

  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.button.active{
  color: #FFFFFF;
  background-color: #4B970F;;
}
</style>