<template>
  <div class="search_vakansi">

    <h1 class="title">Поиск вакансий</h1>

    <div class="content">
      <div class="content_left">
        <div class="content_selects1">
          <h2 class="content_subtitle">Местоположение</h2>
          <select class="content_select" name="" id="">
            <option value="">Нур-Султан</option>
          </select>
        </div>

        <div class="content_selects2">
          <h2 class="content_subtitle">Заработная плата</h2>
          <div class="content_inputs">
            <input placeholder="от" class="content_input" type="number">
            <input placeholder="до" class="content_input" type="number">
          </div>
        </div>
      </div>

      <div class="content_right">
        <div class="content_checkboxs">
          <h3 class="content_info">Опыт работы</h3>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Нет</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">от 1 года до 3</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">От 3 лет до 6</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Более 6 лет</p>
          </div>
        </div>

        <div class="content_checkboxs">
          <h3 class="content_info">Тип занятости</h3>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Полная занятость</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Частичная занятость</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Волонтерство</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Стажировка</p>
          </div>
        </div>

        <div class="content_checkboxs">
          <h3 class="content_info">График работы</h3>

          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Полный день</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Сменный график</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Гибкий график</p>
          </div>
          <div class="content_checkbox">
            <input class="checkbox" type="checkbox">
            <p class="checkbox_text">Удаленная работа</p>
          </div>

        </div>
      </div>
    </div>

    <div class="search_buttons">
      <button class="search_button search">Поиск</button>
      <button class="search_button reset">Сбросить</button>
    </div>


  </div>
</template>

<script>
export default {
  name: 'SearchVakansi'
}
</script>

<style scoped>
.search_vakansi{
  height: 295px;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 25px;
  margin-bottom: 20px;
}

.title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 14px;
}

.content{
  display: flex;
  /* align-items: center; */
}

.content_left{
  margin-right: 70px;
}

.content_right{
  display: flex;
}

.content_selects1{
  margin-bottom: 12px;
}

.content_selects2{
  margin-bottom: 30px;
}

.content_subtitle{
  font-weight: 400;
  font-size: 10px;
  line-height: 20px;
  color: #1C1C1C;
  margin-bottom: 5px;
}

.content_select{
  width: 292px;
  height: 40px;
  padding: 10px;
  background: #F6F7F3;
  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  outline: none;
}

.content_input{
  width: 138px;
  height: 40px;

  border: 1px solid #E0E2D8;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 16px;
  outline: none;
  padding: 15px;
}

.content_info{
  font-weight: 400;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #1C1C1C;
  margin-bottom: 8px;
}

.content_checkboxs{
  display: inline;
  margin-right: 50px;
}

.content_checkbox{
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.checkbox{
  width:15px;
  height: 15px;
  border: 1px solid #E0E2D8;
  /* box-sizing: border-box; */
  /* border-radius: 4px; */
  margin-right: 10px;
}

.checkbox_text{
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #1C1C1C;
}

.search_button{
  width: 160px;
  height: 40px;
  box-sizing: border-box;
  border-radius: 6px;

  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  margin-right: 15px;

  cursor: pointer;
}

.search_button.search{
  padding: 10px 58px;
  background: #4B970F;
  border: 1px solid #4B970F;
  color: #fff;
}

.search_button.reset{
  color: #878882;
  border: 1px solid #878882;
  padding: 10px 47px;
}
</style>

