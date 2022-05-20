<template>
  <div class="container">
    <h1>Editar el curso</h1>

    <ul v-if="errors.length > 0">
      <li v-for="error in errors" :key="error.id">
        {{ error }}
      </li>
    </ul>

    <div class="card mb-4">
      <form @submit.prevent="updateCourse" class="card-body">
        <div class="mb-2">
          <label for="title">Título</label>
          <br>
          <input class="form-control" v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
        </div>
        
        <div class="mb-2">
          <label for="description">Descripción</label>
          <br>
          <textarea class="form-control" v-model="course.description" id="description" placeholder="Ingrese la descripción del curso"></textarea>
        </div>
        
        <div class="mb-2">
          <!-- {{ categories }} -->
          <label for="categoria">Categoría</label>
          <br>
          <select class="form-control" v-model="course.category_id" name="" id="categoria">
            <option value="" selected disabled>Seleccione una categoría</option>
            <option v-for="category in categories" :key=" 'category-' + category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary btn-sm">Guardar</button>
      </form>
    </div>
  </div>

	<!-- {{ course }} -->

</template>

<script>
  export default {

  data() {
    return {
      course: {},
      categories: [],
      errors: [],
    }
  },

  created() {
    this.getCourse();
    this.getCategories();
  },

  methods: {

    getCategories() {
      this.axios.get('/api/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getCourse() {
      this.axios.get('/api/courses/' + this.$route.params.id + '?included=category') 
        .then(response => {
          this.course = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    updateCourse() {
      this.axios.put('/api/courses/' + this.$route.params.id, this.course)
        .then( () => {
          this.$router.push({ name: 'CourseDetails', params: { id: this.$route.params.id } });
        })
        .catch(error => {
          /* console.log(error); */
          this.errors = Object.values(error.response.data.errors).flat()
        });
    }
  }
      
  }
</script>

<style>

</style>