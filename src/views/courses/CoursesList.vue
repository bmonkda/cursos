<template>
	<h1>Listado de cursos</h1>

	<form @submit.prevent="saveCourse">
		<div>
			<label for="title">Título</label>
			<br>
			<input v-model="course.title" id="title" type="text" placeholder="Ingrese el título del curso">
		</div>
		<br>
		<div>
			<label for="description">Descripción</label>
			<br>
			<textarea v-model="course.description" id="description" placeholder="Ingrese la descripción del curso"></textarea>
		</div>
		<br>
		<div>
			<!-- {{ categories }} -->
			<label for="categoria">Categoría</label>
			<br>
			<select v-model="course.category_id" name="" id="categoria">
				<option value="" selected disabled>Seleccione una categoría</option>
				<option v-for="category in categories" :key=" 'category-' + category.id" :value="category.id">
					{{ category.name }}
				</option>
			</select>
		</div>
		<br>
		<button type="submit">Guardar</button>
	</form>

	<ul>
		<li v-for="course in courses" :key="'course-' + course.id">
			<router-link :to="{ name: 'CourseDetails', params: { id: course.id } }">
				{{ course.title }}
			</router-link>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			courses: [],
			categories: [],
			course: {
				title: '',
				description: '',
				category_id: ''
			}
		}
	},

	created() {
		this.getCourses();
		this.getCategories();
	},

	methods: {
		getCourses() {
			this.axios.get('https://cursos-prueba.tk/api/courses')
				.then(response => {
					this.courses = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},

		getCategories() {
			this.axios.get('https://cursos-prueba.tk/api/categories')
				.then(response => {
					this.categories = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},

		saveCourse() {
			this.axios.post('https://cursos-prueba.tk/api/courses', this.course)
				.then(response => {
					this.courses.push(response.data);
					this.course = {
						title: '',
						description: '',
						category_id: ''
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
}
</script>

<style>

</style>