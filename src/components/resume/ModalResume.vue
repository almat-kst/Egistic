<template>
  <div class="modalbackground">
    <div class="modalwindow">
      <h3 class="modal_title">Вы действительно хотите удалить это образование</h3>
      <a class="modal_text active" href="#" @click="closeModal">Нет, вернуться</a>
      <a class="modal_text" href="#" @click="closeModal">Да, удалить</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalResume',
  methods: {
    closeModal(){
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
.modalbackground {
  margin: 0;
  padding: 0;
  position: fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  background: rgba(0,0,0,0.5);
  z-index: 99;
  opacity:1;
}

/* при отображении модального окно - именно здесь начинается магия */
.modalbackground:target {
  opacity: 1;
}

/* ширина диалогового окна и его отступы от экрана */
.modalwindow {
  width: 320px;
  margin: 15% auto;
  padding: 15px;
  background: #fff;
  border-radius: 6px;
}

/* настройка заголовка */
.modal_title{
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #000;
  margin-bottom: 15px;
}

/* вид кнопки ЗАКРЫТЬ */
.modal_text {
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  color: red;
  background: #fff;
  padding: 12px 14px;
  margin: 0 auto;
  border-radius: 3px;
  text-align: center;
  text-decoration: none;
  margin-bottom: 10px;
}

.modal_text.active{
  background-color: #4B970F;
  color: #fff;
}

.modal_text:last-child{
  margin-bottom: 5px;
}
</style>