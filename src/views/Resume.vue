<template>
  <div class="template">
    <div class="main">

      <h2 class="resume_title">Создание резюме</h2>
      <h3 class="resume_subtitle">Ваше резюме</h3>
      <h4 class="resume_subtext">Шанс рассмотрения резюме:</h4>

      <FirstResume></FirstResume>

    </div>
  </div>
</template>

<script>
import FirstResume from '@/components/resume/FirstResume'

export default {
  name: 'Resume',
  components: {
    FirstResume
  }
}
</script>

<style scoped>
.template{
  height: 600px;
  background: #fff;
  padding: 40px 147px;
}

.main{
  position: relative;
}

.resume_title{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 40px;
}

.resume_subtitle{
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 5px;
}

.resume_subtext{
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #D41900;
  margin-bottom: 15px;
}

.just_empty{
  margin-bottom: 35px;
}

.resume_text{
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: #878882;
  margin-bottom: 20px;
}

</style>