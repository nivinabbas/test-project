$('.getRecipeName').on('click', function () {
  let ingredient = $('.inputRecipeName').val();
  $.get(`recipes/${ingredient}`, function (res) {
    const render = new Renderer(res);
    render.renderResults();
  });
});

$(document).on('click', '.imageButton', function () {
  let relevantInputValue = $(this)
    .closest('.recipeCard')
    .find('p')[0].innerHTML;
  alert(relevantInputValue);
});
