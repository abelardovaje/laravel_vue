<template>
	
	<div class="lobby-container">
		<div class="title">
			<h3>{{title}}</h3>
		</div>
		<div class="row">
				
			<div class="col-lg-2 left-panel">
					
				<div class="panel-title">
					Friends
					<span class="pull-right btn-add-friend">
						<i class="fa fa-plus"></i>
					</span>
				</div>

				<div class="friend-list-container">
				
					<ul class="list-group">
					  <li class="list-group-item">Name 
					  	<span class="pull-right btn-add-friend">
							<i class="fa fa-ellipsis-v"></i>
						</span>
					  </li>
					  <li class="list-group-item">Name 
					  	<span class="pull-right btn-add-friend">
							<i class="fa fa-ellipsis-v"></i>
						</span>
					  </li>
					 
					</ul>

				</div>

				<!-- <div class="panel-title">
					Party
				</div>

				<ul class="party-list">
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
					<li>1</li>
				</ul> -->

			</div>

			<div class="col-lg-10 right-panel">
				
				<h4>Rooms</h4>

				<ul class="list-group">
				  <li class="list-group-item">
				  	<div class="row">
				  		<div class="col-lg-10">
				  			<span class="room-name">Name</span>
				  		</div>
				  		<div class="col-lg-2">
				  			<button>Join</button>
				  		</div>
				  	</div>
				  </li>
				  <li class="list-group-item">
					<div class="row">
				  		<div class="col-lg-10">
				  			<span class="room-name">Name</span>
				  		</div>
				  		<div class="col-lg-2">
				  			<button>Join</button>
				  		</div>
				  	</div>
				  </li>
				 
				</ul>

			</div>

		</div>
	</div>

</template>

<script type="text/javascript">
	
export default{
	data(){
		return{
			title:'Lobby'
		}
	}
}


</script>
