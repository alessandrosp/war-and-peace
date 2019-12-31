var utils = {
  
  filterByName: function(name) {
    $('character').each(function() {
      // If name is empty, then we display all characters; if not
      // then we check whether the name inputted is a substr of the name.
      if (!name) {
        $(this).css('display', 'block');
      } else if (this.id.includes(name)) {
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });
  },
  
  /**
   * Test whether the utils module has been loaded correctly.
   */
  testLog: function() {
    console.log('This is just a test.');
  },

};

$('#filter-name').change(function() {
  utils.filterByName(this.value);
});
