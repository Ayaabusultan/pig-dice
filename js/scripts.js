function AddressBook (){
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact){
  this.contacts.push(contact);
}

function Contact (first, last, phone){
  this.firstName = first;
  this.lastName = last;
  this.phoneNumber = phone;
  this.addresses = [];
}

function Address (street, city, state){
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName= function(){
  return this.firstName + " " +this.lastName;
}

  function reset(){
    $("#new-contact")[0].reset();
}

$(document).ready(function(){

  $("#add-address").click(function(){
    $("#new-addresses").append(
        '<div class="new-address">'+
          '<div class="form-group">'+
          '<label for="new-street">Street</label>'+
          '<input type="text" class="form-control new-street">'+
        '</div>'+
        '<div class="form-group">'+
          '<label for="new-city">City</label>'+
          '<input type="text" class="form-control new-city">'+
        '</div>'+
        '<div class="form-group">'+
          '<label for="new-state">State</label>'+
          '<input type="text" class="form-control new-state">'+
        '</div>'+
      '</div>');
  });

  var newAddressBook = new AddressBook();

  $("#new-contact").submit(function(event){
    event.preventDefault();

    var fName = $("#new-first-name").val();
    var lName = $("#new-last-name").val();
    var phone = $("#phone").val();

    var newContact = new Contact (fName, lName, phone);

    $(".new-address").each(function(){
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      console.log(inputtedStreet+", "+inputtedCity+", "+inputtedState);
      var newAddress = new Address(inputtedStreet,inputtedCity,inputtedState);
      newContact.addresses.push(newAddress);
    });
    newAddressBook.addContact(newContact);
    console.log(newAddressBook);

    $("ul#contacts").append("<li><span class='contact'>"
                            +newContact.fullName()
                            +"</span></li>"+"<br>");

      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#addresses").text("");

        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
        });

      });


      reset();



  });


});
