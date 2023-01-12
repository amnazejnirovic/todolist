// Add a new to-do item
$("#add-button").click(function () {
    // Get the text of the new to-do item
    let todoItem = $("#new-todo-item").val();

    // Create a new list item
    let newItem = $("<li>").text(todoItem);

    // Add the "edit" button to the new list item
    let editButton = $("<button>").addClass("edit-button").text("Edit");
    newItem.append(editButton);

    // Add the "delete" button to the new list item
    let deleteButton = $("<button>").addClass("delete-button").text("Delete");
    newItem.append(deleteButton);

    // Append the new list item to the to-do list
    $("#todo-items").append(newItem);
    $( "#new-todo-item" ).val('');
});

// Edit a to-do item
$(document).on("click", ".edit-button", function () {
    // Get the text of the to-do item
    let todoItem = $(this).parent().text();
    let input = $("<input type='text'>").val(todoItem);
    $(this).parent().html(input);
    input.focus();
});

// Save an edited to-do item
$(document).on("focusout", "li input[type='text']", function () {
    let newText = $(this).val();
    let newItem = $("<li>").html(newText);
    let editButton = $("<button>").addClass("edit-button").text("Edit");
    newItem.append(editButton);
    let deleteButton = $("<button>").addClass("delete-button").text("Delete");
    newItem.append(deleteButton);
    $(this).replaceWith(newItem);
});

// Delete a to-do item
$(document).on("click", ".delete-button", function () {
    $(this).parent().remove();
});

// Add ability to format the text
$(document).on("dblclick", "li", function () {
  document.execCommand('bold', false, null);
});
$(document).on("contextmenu", "li", function (event) {
    event.preventDefault();
    document.execCommand('underline', false, null);
});
$(document).on("mouseup", "li", function (event) {
    if(event.which == 2) {
        document.execCommand('strikeThrough', false, null);
    }
    if(event.which == 3){
        document.execCommand('italic', false, null);
    }
});
