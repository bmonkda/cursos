<template>
	<h1>Listado de cursos</h1>

	<form>
		<div>
			<label for="title">Título</label>
			<br>
			<input id="title" type="text" placeholder="Ingrese el título del curso">
		</div>
		<br>
		<div>
			<label for="description">Descripción</label>
			<br>
			<textarea id="description" placeholder="Ingrese la descripción del curso"></textarea>
		</div>
		<br>
		<div>
			<!-- {{ categories }} -->
			<label for="categoria">Categoría</label>
			<br>
			<select name="" id="categoria">
				<option v-for="category in categories" :key=" 'category-' + category.id" :value="category.id">
					{{ category.name }}
				</option>
			</select>
		</div>
	</form>

	<ul>
		<li v-for="course in courses" :key="'course-' + course.id">
			<router-link :to="{name: 'CourseDetails', params: {id: course.id}}">
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
			categories: []
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
		}
	},
}
</script>

<style>

</style>