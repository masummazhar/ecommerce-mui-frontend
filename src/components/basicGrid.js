import React from "react";

import Grid from '@mui/material/Grid';

const BasicGrid = () => {
    return (
			<div>
				<h3 style={{alignItems:"center", justifyContent:"center"}}>This is Blogs</h3>
				<Grid container style={{ margin: "20px " }}>
					<Grid
						item
						xs={6}
						md={4}
						style={{
							border: "3px solid gray",
							padding: "10px 15px",
							borderRadius: "10px",
						}}
					>
						<h5> Blog One</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
							sapiente nemo sed sequi laudantium, veniam necessitatibus maxime
							qui quae dolores cumque quam facilis, quo sit commodi
							reprehenderit aliquam. Laborum veniam officiis, velit at tempore
							inventore voluptates reprehenderit voluptatum mollitia. Nesciunt
							optio suscipit possimus est quidem cumque dolores mollitia dolorem
							praesentium.
						</p>
					</Grid>

					<Grid
						item
						xs={6}
						md={4}
						style={{
							border: "3px solid gray",
							padding: "10px 15px",
							borderRadius: "10px",
						}}
					>
						<h5>Blog Two</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
							obcaecati quam, eligendi, enim, ratione nostrum quo numquam quos
							quisquam esse veritatis aspernatur porro molestias fugit odit
							corporis repellat quis earum facere natus ab amet. Facilis esse
							hic mollitia animi corporis.
						</p>
					</Grid>

					<Grid
						item
						xs={6}
						md={4}
						style={{
							border: "3px solid gray",
							padding: "10px 15px",
							borderRadius: "10px",
						}}
					>
						<h5>Blog Three</h5>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
							minima accusantium libero a hic facere rem provident ducimus,
							dolorem molestiae et explicabo unde soluta beatae corporis
							architecto, nobis commodi quas? At deleniti ex aperiam
							praesentium, delectus perspiciatis consequuntur tempore nemo
							consequatur ipsa excepturi, maiores et! Ullam fugit quas id,
							officiis voluptatum minus maxime nisi doloremque?
						</p>
					</Grid>
				</Grid>
			</div>
		);
}

export default BasicGrid