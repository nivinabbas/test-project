class Renderer {
  constructor(data) {
    this.data = data;
  }

  renderResults() {
    const dataOfRecipes = this.data;
    var source = $('#recipes-template').html();
    var template = Handlebars.compile(source);
    $('.recipeCard').empty();
    var newHTML = template(dataOfRecipes);
    $('.recipeCard').append(newHTML);
  }
}
