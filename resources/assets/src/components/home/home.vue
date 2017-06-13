<template>	
		<div>
			
			<div class="page-header-area">
				
				<div class="container page-header-ctn">
						
					<div class="row">
						<div class="col-lg-6">
							<div class="jumbotron">
							  <div class="container">
							    <h2 class="text-uppercase">Welcome</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.
								</p>
								<p><a href="#" role="button">Register</a></p>
							  </div>
							</div>
						</div>
						<div class="col-lg-6">
							
						</div>
					</div>

				</div>
			</div>

			<section id="content">
				<div class="main-content container">
					
					<div class="row">
					  <div class="col-sm-6 col-md-4">
					    <div class="thumbnail">
					      <img  :src="img" alt="">
					      <div class="caption">
					        <h3>title</h3>
					        <p class="details">
					        	
					        	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima .

					        </p>
					        <p>
						        <a href="#" class="btn btn-primary" role="button">Read more</a> 
					        </p>
					      </div>
					    </div>
					  </div>

					   <div class="col-sm-6 col-md-4">
					    <div class="thumbnail">
					       <img  :src="img" alt="">
					      <div class="caption">
					        <h3>title</h3>
					        <p class="details">

					        	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.

					        </p>
					         <p>
						        <a href="#" class="btn btn-primary" role="button">Read more</a> 
					        </p>
					      </div>
					    </div>
					  </div>

					   <div class="col-sm-6 col-md-4">
					    <div class="thumbnail">
					       <img  :src="img" alt="">
					      <div class="caption">
					        <h3>title</h3>
					        <p class="details">
					        	
					        	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.

					        </p>
					        <p>
						        <a href="#" class="btn btn-primary" role="button">Read more</a> 
					        </p>
					      </div>
					    </div>
					  </div>
					</div>


				</div>

			</section>

			

		</div>
</template>

<script>
	
	export default{
		data(){
			return{				
				title:'Home component',
				img:'sample.jpg'
			}
		}
	}

</script>

