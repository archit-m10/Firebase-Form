var firebaseConfig = {
  apiKey: "AIzaSyBTstr3lgHf5lNQ_y5U1hTWuwT7cCv3Oyw",
  authDomain: "dojo-dual.firebaseapp.com",
  databaseURL: "https://dojo-dual.firebaseio.com",
  projectId: "dojo-dual",
  storageBucket: "dojo-dual.appspot.com",
  messagingSenderId: "1078499869738",
  appId: "1:1078499869738:web:41bf52c69ddcff7f312f53",
  measurementId: "G-ZN5PKEQGLJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('Properties').child('D0J0234')

$('#dojoForm').submit(function(e) {
e.preventDefault();

var newMessageRef = messagesRef.push();
newMessageRef.set({
  property_searchadd: $('.property_searchadd').val(),
  property_3_months_membership: $('.property_3_months_membership').val(),
  property_6_months_membership: $('.property_6_months_membership').val(),
  property_add: $('.property_add').val(),
  property_batch1: $('.property_batch1').val(),
  property_batch1_timing: $('.property_batch1_timing').val(),
  property_batch2: $('.property_batch2').val(),
  property_batch2_timing: $('.property_batch2_timing').val(),
  property_head_instructor_details: $('.property_head_instructor_details').val(),
  property_img: $('.property_img').val(),
  property_img2: $('.property_img2').val(),
  property_img3: $('.property_img3').val(),
  property_img4: $('.property_img4').val(),
  property_instuctor_contact: $('.property_instuctor_contact').val(),
  property_instuctor_details: $('.property_instuctor_details').val(),
  property_instuctor_name: $('.property_instuctor_name').val(), 
  property_last_update: $('.property_last_update').val(),
  property_location: $('.property_location').val(),
  property_map_location: $('.property_map_location').val(),
  property_monthly_membership: $('.property_monthly_membership').val(),
  property_name: $('.property_name').val(),
  property_popularity: $('.property_popularity').val(),

  property_price: $('.property_price').val(),
  property_pricing: $('.property_pricing').val(),
  property_rating: $('.property_rating').val(),
  property_rating_remark: $('.property_rating_remark').val(),
  property_ratingInt: $('.property_ratingInt').val(),
  property_region: $('.property_region').val(),

    property_registration_fee: $('.property_registration_fee').val(),
  property_searchDOJO: $('.property_searchDOJO').val(),
  property_searchName: $('.property_searchName').val(),

  property_searchNO: $('.property_searchNO').val(),

  property_shortadd: $('.property_shortadd').val(),

  property_type: $('.property_type').val(),
  property_type2: $('.property_type2').val(),
  property_type3: $('.property_type3').val(),
  property_yearly_membership: $('.property_yearly_membership').val()

});

$('.success-message').show();

$('#dojoForm')[0].reset();
});