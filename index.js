$(document).ready(function () {


    let g_element = "";
    var global_id = 1;
    var global_id_of_li = 1;
    var isClicked = true;

    let element = document.getElementById("EnterSomeText");

    $("#plusBtn").click(function () {

        $(`#${global_id}`).text($("#EnterSomeText").val());

        $("#Items").append(`<li class="nav-item">
        <input class="nav-link active" id="${global_id}" type="text" style="width: 150px;" placeholder="Enter Section">${$(`#${global_id}`).text()}</input>
        </li>`);


        ++global_id;


    });




    $("#saveBtn").click(function () {

        alert("Saved Successfully");

        let plusElement = document.getElementById("plusBtn");
        plusElement.style.display = "none";


        for (let i = 1; i <= global_id; i++) {
            if ($(`#${i}`).val().length == 0) {
                $(`#${i}`).css("display", "none");
            }
        }

    });



    $("#verticalOrHorizontal").click(function () {



        if(isClicked){
            $("#Items").removeClass("navbar-nav");
            isClicked = false;
        }
        else{
            $("#Items").addClass("navbar-nav");
            isClicked = true;
        }


    })


});