var addressTabel = {home_link: "Home", samples_link: "Samples", software_link:"Software", events_link:"Events", academic_link: "Academic_Info"};
var colorTable = {home_link:"#FF0000", samples_link: "#33CC33", software_link:"#0066CC", events_link:"#FF6600",academic_link:"#7A00CC"};
var css_template = '<style type="text/css">b,a{color:<<COLOR>>}</style>';

/**

*/
function loadContent(index){
	//gets the address of the content to be loaded
	var newPage = addressTabel[index];
	var data_container = document.getElementById("data_container");
	if(data_container.getAttribute("current-data") !== newPage){
		//changes the title of the document
		document.title = "Chem Access: " + newPage.replace("_", " ");
		data_container.setAttribute('current-data', newPage);
		//makes the ajax request
		requestData(newPage.toLowerCase() + ".html",function (xHTML){changeContent(xHTML,colorTable[index]);});
	}
}

function changeContent(xHTML,color){
	var container = document.getElementById('data_container');
	//fades out the old content
	$(container).fadeTo('600',0,function() {
		//fades in new content
		$(this).html(create_css_header(color) + xHTML.responseText).fadeTo('600',1);
	});
}

function create_css_header(color){
	//Adds the correct css to the top of the 
	return css_template.replace("<<COLOR>>",color);
}

function toggle_menu(){
	//if the image map menu is currently being used
	if($("#left_column").attr("class") === "map_menu_container"){
		//changes to the list implementation
		$("#left_column").attr("class","list_menu_container");
		requestData("alternative_menu.html",change_menu);
	}else{
		//changes to the map implementation
		$("#left_column").attr("class","map_menu_container");
		requestData("image_map_menu.html",change_menu);
	}
}

/**
Used for request data
*/
function change_menu(xHTML){
	$("#left_column").html(xHTML.responseText);
}