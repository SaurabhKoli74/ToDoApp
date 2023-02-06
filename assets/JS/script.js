document.getElementById('delete-button').addEventListener('click',function(){
    let completed = document.querySelectorAll('.completed:checked');
    let arrCompleted = [];
    for(let i of completed){
        let temp = '';
        temp = i.getAttribute('id');
        console.log(temp);
        arrCompleted.push(temp);
    }

    if(arrCompleted.length === 0){
        console.log('No item is Checked');
        swal("No item is Checked!!","Please select item to remove!","error")
            
        return;
    }

    $.ajax({
        type:'post',
        url:'/delete-todo/?id='+arrCompleted,
        success:function(){
            swal("Item is deleted successfully","click ok to go back Home","success")
            .then(redir=>{
                window.location = '/';
            });
        },
        error:function(err){
            
           
                window.location = '/';
        }
    });
});