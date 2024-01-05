function hoveringLinks(){
$(".navItems").hover(function(){
$(this).css("background-color", "seagreen");
$(this).css("border-radius", "20px");
$(this).css("padding", "10px");
});
}

function unhoveringLinks (){
  $(".navItems").mouseleave(function(){
    $(this).css("background-color", "");
    $(this).css("border-radius", "0");
    $(this).css("padding", "0");
    }); 
}


function buttonLink(){
  $("#recipe1").on("click",function(){
    window.location.href="/recipe1.html"
   });

   $("#recipe2").on("click",function(){
    window.location.href="/recipe2.html"
   });

  $("#recipe3").on("click",function(){
   window.location.href="/recipe3.html"
  });
    
};


function hoverCard(){
  $(".featureBox, .recipeImage, .recipesCard ").hover(function(){
  $(this).css("transform", "translateY(-30px)");
  });

  $(".featureBox, .recipeImage, .recipesCard").mouseleave(function(){
    $(this).css("transition", "transform 2s");
    $(this).css("transform", "translateY(0)");
  })
}

// function snsDesign(){
//   $(".socialSites").hover(function(){
//   $("#snsContainer").html("Facebook");
//   $("#snsContainer").show();

//   });

//   $(".socialSites").mouseleave(function(){
//     $("#snsContainer").html("Facebook");
//     $("#snsContainer").hide();
//     });
  

// }


 function hoverBotton(){
$("#learnMore, #seeRecipe").hover(function(){
$(this).css("background-color","transparent");
$(this).css("border","2px solid white");
});

$("#learnMore, #seeRecipe").mouseleave(function(){
  $(this).css("border","none");
  $(this).css("background-color","tomato");
  
});
 }
// $keyframe.define([{
//   name:'ball-move',
//   '0%':{
//     'margin-left':'0px;'
//   },
//   '50%':{
//   'margin-left':'60px;'
//   },
//   '100%':{
//     'margin-left':'0px;'
//   },
// }])



$("document").ready(function(){
hoveringLinks();
unhoveringLinks();
buttonLink();
hoverCard();
hoverBotton();
// snsDesign();
$("#saveRecipes").click(function(){
  alert("succefully added to the list")
  });
});

