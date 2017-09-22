// Alternative way using JQuery


function addTodo(event) {

    if (event.which === 13) {
        var todoText = $(this).val();

        $('#list').append(`<li class="list-group-item justify-content-between">
            <input type="checkbox" class="checkbox">${todoText}<span><i class="fa fa-trash delete" aria-hidden="true"></i>
            </span></li>
            `);

        $(this).val('');

    }

}

function highlightCheckedTodo() {
    console.log($(this).attr('checked'));
}

$('#todo').on('keypress', addTodo);
$("input[type='checkbox']").on('click', highlightCheckedTodo);

