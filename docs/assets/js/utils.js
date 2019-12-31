var utils = {
  
  /**
   * Iterate through the characters and hide cards when the name doesn't match.
   * 
   * Note that the name can be just a substr of the full name.
   * @param {String} name - The name of the character.
   */
  filterByName: function(name) {
    $('.character').each(function() {
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
  console.log('Change has been detected.');
  utils.filterByName(this.value);
});
