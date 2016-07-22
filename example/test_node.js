var jsonstyle = require('../src/index.js')


var json = {
	a1bc1_def : "a1bc1_def",
	a1bc_def : "a1bc_def",
	a1bc_def : "a1bc_def",
	a1bc_def_g_hi_j : "a1bc_def_g_hi_j",
}

var json2 = {
	faceBook : "faceBook",
	windowsXP : "windowsXP",
	MacBook : "MacBook",
	user_name : "user_name",
	Tag_Id : "Tag_Id",
	ToP_OnE : "ToP_OnE",
	person______________id : "person______________id",
	LadyGaGa : "LadyGaGa",
	iCBC : "iCBC",
	iCbDD : "iCbDD",
	HHKB : "HHKB"
}

var json3 = {
		face_book:"face_book",
		h_h_k_b : "h_h_k_b",
		i_c_b_c : "i_c_b_c",
		i_cb_d_d : "i_cb_d_d",
		lady_ga_ga : "lady_ga_ga",
		Mac_Book : "Mac_Book",
		IOS : "IOS",
		person______________id : "person______________id",
		tag_id : "tag_id",
		user_name : "user_name",
		windows_x_p : "windows_x_p"
	}

console.log(jsonstyle.toCamelCase(json))
console.log(jsonstyle._(json2))
console.log(jsonstyle.c(json3))