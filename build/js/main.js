jQuery(document).ready(function ($) {
  $('[type=tel], .form-input_tel').mask('+7 (999) 999-99-99');
  $('.form-input_date').datepicker($.datepicker.regional['hi']);

  //for single input file
  $('.form-block_file input[type=file]').on('change', function () {
    let file = this.files[0];
    $(this).closest('.form-block_file').find('.form-file-btn').html(file.name);
  });

  //for multiple input file
  var dt = new DataTransfer();

  $(document).on('click', '.input-file-list-remove', function () {
    let name = $(this).parent().find('.input-file-list-name').text();
    let input = $(this).closest('.input-file-row').find('input[type=file]');
    $(this).closest('.input-file-list-item').remove();
    for ( let i = 0; i < dt.items.length; i++ ) {
      if (name === dt.items[i].getAsFile().name) {
        dt.items.remove(i);
      }
    }
    input[0].files = dt.files;
  });

  $('.input-file input[type=file]').on('change', function () {
    let $files_list = $(this).closest('.input-file-list');
    // $files_list.empty();

    for (var i = 0; i < this.files.length; i++) {
      let new_file_input =
        '<div class="input-file-list-item">' +
        '<span class="input-file-list-icon"></span><span class="input-file-list-name">' +
        this.files.item(i).name +
        '</span>' +
        '<span class="input-file-list-remove"></span>' +
        '</div>';
      $files_list.prepend(new_file_input);
      dt.items.add(this.files.item(i));
    }
    this.files = dt.files;
  });
});
