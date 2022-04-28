<template>
	<h1>Listado de cursos</h1>
	<ul>
		<li v-for="course in courses" :key="course.id">
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
			courses: []
		}
	},

	created() {
		this.getCourses();
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
		}
	},
}
</script>

<style>

</style>