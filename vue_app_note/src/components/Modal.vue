<template>
    <div class="modal fade show">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    Header </div>
                <div  class="modal-body">Body</div>
                <div  class="modal-footer">footer</div>
            </div>
        </div>
    </div>
</template>

<script>
 
export default   {
  name:"Modal",
  props: {
    title:{
      type:String,
      required:true,
    }
  }

} 
</script>
