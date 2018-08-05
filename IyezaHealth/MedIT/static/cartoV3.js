
 
var w = 500//960;
var h = 500;

var svg = d3.select("div#carto").append("svg")

    .attr("width", 1200)

    .attr("height", 1200)
	.attr("viewBox","-500 -100 1400 700")
	.attr("preserveAspectRatio","xMidYMid meet")
	;
  
 var centerx = -0.08;

 var centery = 51.52;
 
 
 var xramp= d3.scale.linear().domain([0,100]).range([0,1]);
 var yramp= d3.scale.linear().domain([0,100]).range([0,1]);

var colorramp=d3.scale.linear().domain([0,50,100]).range(["yellow","orange","red"]);//.domain([0,100,200]).range([ "blue","yellow","red"]);

//var colorramp = d3.scale.linear()
  //  .range(["#ffff8c","#f9d057","#f29e2e","#e76818","#d7191c"]);


var sites  = [{"name": "Sensor","scale": 100,"xcoord": 0,"ycoord": 0,"we_lon": 0,"magnitude" :1},

{'name': 1387.0, 'ycoord': 71.74279457557587, 'Alarm': 0.0, 'magnitude': 1.42355, 'Trigger': 1.0, 'Radius': 47.0, 'Spectral Centroid': 805.0, 'Date Time': '2011-12-07 10:12:48', 'Theta': 126.0, 'Energy': 0.44327852622875186, 'xcoord': 25.079302751207432},
{'name': 1388.0, 'ycoord': 40.497248193222674, 'Alarm': 0.0, 'magnitude': 1.0432000000000001, 'Trigger': 1.0, 'Radius': 34.0, 'Spectral Centroid': 406.0, 'Date Time': '2011-12-07 10:18:35', 'Theta': 332.0, 'Energy': 0.7225978995108184, 'xcoord': -64.31152998317272},
{'name': 1389.0, 'ycoord': 9.057690294110266, 'Alarm': 0.0, 'magnitude': 0.7022, 'Trigger': 1.0, 'Radius': 98.0, 'Spectral Centroid': 110.0, 'Date Time': '2011-12-07 12:21:22', 'Theta': 58.0, 'Energy': 0.6709783084956567, 'xcoord': 75.45832125442482},
{'name': 1390.0, 'ycoord': -65.19303508661908, 'Alarm': 0.0, 'magnitude': 1.4341000000000002, 'Trigger': 1.0, 'Radius': 71.0, 'Spectral Centroid': 775.0, 'Date Time': '2011-12-07 12:28:49', 'Theta': 78.0, 'Energy': 0.605078621358314, 'xcoord': 39.062362655052674},
{'name': 1391.0, 'ycoord': -15.690407821306783, 'Alarm': 0.0, 'magnitude': 1.09085, 'Trigger': 1.0, 'Radius': 23.0, 'Spectral Centroid': 146.0, 'Date Time': '2011-12-07 12:28:51', 'Theta': 193.0, 'Energy': 0.9420818881251157, 'xcoord': -74.3626996712806},
{'name': 1392.0, 'ycoord': -75.33111045339572, 'Alarm': 0.0, 'magnitude': 1.6246, 'Trigger': 1.0, 'Radius': 80.0, 'Spectral Centroid': 747.0, 'Date Time': '2011-12-07 12:28:54', 'Theta': 330.0, 'Energy': 0.4236215495260556, 'xcoord': -10.061003819614347},
{'name': 1393.0, 'ycoord': -51.681785664637744, 'Alarm': 0.0, 'magnitude': 0.6397, 'Trigger': 1.0, 'Radius': 73.0, 'Spectral Centroid': 899.0, 'Date Time': '2011-12-07 12:29:07', 'Theta': 84.0,'Energy': 0.3892670405391646, 'xcoord': 55.72246432557021}
]

/*{"name": "1","Energy": 10,"xcoord": 15.282270013549237,"ycoord": 18.505464685680654,"we_lon": 30,"magnitude" :0.8},
{"name": "2","Energy": 80,"xcoord":23.875769488105615,"ycoord": -2.4387766094591274,"we_lon": 20,"magnitude" :0.5},
{"name": "3","Energy": 5,"xcoord": -15.444915200567987,"ycoord": 18.369937246688238,"we_lon": 10,"magnitude" :0.26},
{"name": "1","Energy": 55,"xcoord": 2.145814,"ycoord": 52.718628,"we_lon": 30,"magnitude" :0.8},
{"name": "2","Energy": 35,"xcoord": 2.497487,"ycoord": 62.80976,"we_lon": 20,"magnitude" :0.5},
{"name": "3","Energy": 20,"xcoord": 2.67487,"ycoord": 52.89976,"we_lon": 10,"magnitude" :0.26}]*/


var med = [{"xcoord": 100,"ycoord": 100}, {
        "xcoord": -9.145814,
        "ycoord": 38.718628
    }];/*,
    {
        "xcoord": 1.145814,
        "ycoord": 50.718628
    },
    {
        "xcoord": 1.497487,"ycoord": 51.80976
    },
    {
       "xcoord": 1.67487,"ycoord": 51.89976
    },
    {
        "xcoord": 8.784901,
        "ycoord": 40.11872
    },
    {
        "xcoord": 8.908437,
        "ycoord": 40.20069
    },
    {
        "xcoord": 8.778066,
        "ycoord": 40.597602
    }];*/

			  var lineFn = d3.svg.line()

			  .x(function(d) { return (xramp(d.xcoord) * w)})

			  .y(function(d) { return (yramp(d.ycoord) * h)})

			  .interpolate("cardinal")

			  ;

			  svg.append("path")

				.style("fill", "black")

				.style("stroke", "black")

				.style("stroke-width", 1)

				.style("opacity", 1)

				.attr("d", lineFn(med))



	  
 
 svg.selectAll("circle.dccircle")

	  .data([1.0, .9, .8, .7, .6, .5, .4, .3, .2, .1])

	  .enter().append("circle")		

	  .attr("cx", 100)

	  .attr("cy", 100)

	  .attr("r", function(d) { return (d * w)})
	  .attr("class", "dccircle")

	  .style("stroke", "black")

	  .style("fill", "white")

	  .style("opacity", 0);
	  
	  
var energy_min =0; 
var energy_max =0;

	  
var result = [];
var j = 0;
result.push(j);                     

for (var i = 0; i !=4; ++i)  { 
j = j + 25 
result.push(j)}                        
                                 
console.log(result);

	  
	  //Creates the legend
	  svg.selectAll("rect.legendrects")

		  //.data([0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200])
          .data([0, 20, 40, 60, 80])
		  .enter().append("rect")		

		  .attr("x", function(d) { return (d*3+ 600)})

		  .attr("y", 380)

		  .attr("width", 60)

		  .attr("height", 10)

		  .attr("fill", function(d) { return (colorramp(d))})

		  .attr("class", "legendrects")

		  .style("opacity", 1);
		  
		  
	//var colorramp=d3.scale.linear().domain([0,50,100]).range(["yellow","red"]);
	 // var colorramp = d3.scale.linear()
    //.range(["#ffff00","#f9d057","#f29e2e","#e50b0b","#B30000"]);

	   // Circles plots the main point

	  svg.selectAll("circle.siterects")

	  .data(sites)

	  .enter().append("circle")		

	  .attr("cx",function(d) { return (d.xcoord+100)}) // function(d) { return (xramp(d.xcoord) * w)})

	  .attr("cy",function(d) { return (d.ycoord+100)}) // function(d) { return (yramp(d.ycoord) * h)})

	  //.attr("width", function(d) { return ((d.scale < 90) ? d.scale / 20 : 8)})
	  .attr("width", 5)

	  //.attr("height", function(d) { return ((d.scale < 90) ? d.scale / 20 : 8)})
	   .attr("height", 5)
       .attr("r", 5)

	  //.attr("fill", function(d) { return (colorramp(d.we_lon))})
	  .attr("fill", function(d) { 
	  if(d.name == "Sensor"){
	  return ("white")
	  }
	  else{
	  return (colorramp(d.Energy * 100))
	  }
	  })

	  .attr("class", "siterects")

	  .style("opacity", 1);
	  
	  
	  
	  svg.selectAll("text.dclabel")
			.data(sites)

		    .transition()

		    .duration(3000)
	      .text(function(d) { return d.name })

		  .attr("x",function(d) { return (d.xcoord+100 - 5)}) // function(d) { return (findx(d[datapath],d.xcoord,d.ycoord,centerx,centery)) - 5})

		  .attr("y",function(d) { return (d.ycoord+100 +5)}) // function(d) { return (findy(d[datapath],d.xcoord,d.ycoord,centerx,centery)) + 5})

		  ;
	  
	 //Adds text on the legend
	    var legendt = svg.selectAll("text.legendtext")

	  .data([0, 20, 40, 60, 80])

	  .enter().append("text")

	  .attr("x", function(d, i) { return ((i*60+ 600) )})

	  //.attr("x", function(d, i) { return ((i * 50) + 25)})

	  .attr("y", 375)

	  .attr("class", "legendtext")

	  .text(function(d, i) { return (i == 4) ? ("" + d + "") : ("" + d)})
	  .attr("font-family", "sans-serif")
	 .attr("font-size", "18px")

	  ;
	  
	  //Adds the name of the legend on top of it
	  var titletext = svg.selectAll("text.titletext")

	  .data([0])

	  .enter().append("text")

	  .attr("x", 600)

	  .attr("y", 345)

	  .attr("class", "titletext")

	  .text("Trigger Energy (KJ)")
	  .attr("font-family", "sans-serif")
	 .attr("font-size", "18px");
	  
	  
	  //Adds the name of the point
	  svg.selectAll("text.dclabel")

	  .data(sites)

	  .enter().append("text")

	  .attr("x", function(d) { return ((xramp(d.xcoord)  * w) - 15)})

	  .attr("y", function(d) { return ((yramp(d.ycoord)  * h) - 15)})

	  .text(function(d) { return d.name })

	  .attr("opacity", function(d) { return ((d.Energy > 90) ? 100 : 0)})

	  .attr("class", "dclabel")

	  .attr("id", function(d, i) { return "dclabel_" + i})

	  .on("click", mouseclick);
	  
	  
	  
	  var selectiontext = svg.selectAll("text.ringlabel")

	  .data([1.0, .9, .8, .7, .6, .5, .4, .3, .2, .1])

	  .enter().append("text")

	  .attr("x", function(d) { return ((d  * w) + 100)})

	  .attr("y", 100)

	  .text(function(d) { return d * w})

	  .attr("class", "ringlabel")

	  .attr("opacity", 0)
	  .attr("font-family", "sans-serif")
	 .attr("font-size", "16px")

	  ;
	  
		  
	  //when you click on the point the name appears and click gain it disappears
	  	  function mouseclick(d, i) {

		    if (d3.select(this).attr("opacity") > 0){

		    	d3.select(this).attr("opacity", 0)

		    }

		    else {

		    	d3.select(this).attr("opacity", 1)		    	

		    }

	  }
	  
	  
	  function clearlabels(d, i) {

		  if (i == 0) {

		  svg.selectAll("text.dclabel")

		  .data(sites)

		    .transition()

		    .duration(800)

   		  	.attr("opacity", 0)

		  ;

		  }

		  else {

			  svg.selectAll("text.dclabel")

			  .data(sites)

			    .transition()

			    .duration(800)

	   		  	.attr("opacity", function(d) { return ((d.Energy > 90) ? 100 : 0)})

		  }

	  }
	  
	  
	  
	  var newTitleText = "";

	//now get segments and draw d3 graph

	var svg = d3.select("div#carto svg");
	var pathtype = "e";

	var ringtype = " m";		

	var max = 75;//100;

	var mid = 50;//50;
		
	newTitleText = " Trigger distance to ";
	var monthtype = "w";

	var datapath = "" + monthtype + pathtype + "_lon";

	var centerx = 100;// -0.08;

	var centery = 100;// 51.52;

	
	newTitleText = "Trigger Energy (KJ)";
	
	
		  //var xramp=d3.scale.linear().domain([-8.5,43]).range([0,w]);

		  //var yramp=d3.scale.linear().domain([55.5,22.5]).range([0,h]);

		  //var colorramp=d3.scale.linear().domain([0,50,100]).range(["yellow","red"]);//.domain([0,mid,max]).range(["blue","yellow","red"]);
		  //var colorramp = d3.scale.linear()
   // .range(["#ffff8c","#f9d057","#f29e2e","#e76818","#d7191c"]);


		  var costramp=d3.scale.linear().domain([0,max]).range([0,1]);	  
		  
		  
		  svg.selectAll("text.titletext")

		  .transition()

		   .duration(3000)

		  .text(newTitleText)

		  ;
		  
	
	  
	  
	  //Adds the point in the middle
		  //svg.selectAll("rect.siterects")
		 
		 svg.selectAll("circle.siterects")
         
		  .attr("cx",function(d) { return (d.xcoord+100)}) //function(d) { return (findx(d[datapath],d.xcoord,d.ycoord,centerx,centery))})

		  .attr("cy",function(d) { return (d.ycoord+100)})// function(d) { return (findy(d[datapath],d.xcoord,d.ycoord,centerx,centery))})
		  

		  //.attr("fill", function(d) { return (colorramp(d[datapath]))})
		  //.attr("fill", function(d) { return (colorramp(d.scale))})  //energy levels
		  
		  .attr("fill", function(d) { 
	  if(d.name == "Sensor"){
	  return ("black")
	  }
	  else{
	  return (colorramp(d.Energy*100))
	  }
	  })

        // .attr("width", function(d) { return ((d.scale < 90) ? d.scale / 20 : 8)})  //

	     //.attr("height", function(d) { return ((d.scale < 90) ? d.scale / 20 : 8)})
		 
		 .attr("width", function(d) {
					if(d.name=="Sensor"){ return(4)}
					else{return (10)}})  //

					
		// return (20 * d.magnitude)}})  //

		 .attr("height", function(d) {
					if(d.name=="Sensor"){ return(4)}
					else{
		 return (10)}})
		// return (20 * d.magnitude)}}) 
		 
		 .attr("r", function(d) {
					if(d.name=="Sensor"){ return(4)}
					else{
		 return (10)}}) 
		 //return (20 * d.magnitude)}}) 
		 
	     //.attr("height",function(d) { return (20 * d.magnitude)})
		 //.attr("r",function(d) { return (20 * d.magnitude)})

		  .style("opacity", .8)

		  ;

	  
		  svg.selectAll("circle.dccircle")

		    //.transition()

		   // .duration(3000)

		  .style("opacity", 100)

		  ;
		  
	
		  
svg.selectAll("text.dclabel")
			.data(sites)

		   // .transition()

		   // .duration(3000)
	      .text(function(d) { return d.name })

		  .attr("x",function(d) { return (d.xcoord - 15)}) //function(d) { return (findx(d[datapath],d.xcoord,d.ycoord,centerx,centery))})

		  .attr("y",function(d) { return (d.ycoord - 10)})// function(d) { return (findy(d[datapath],d.xcoord,d.ycoord,centerx,centery))})
		  
		  
		//  .attr("x", function(d) { return (findx(d[datapath],d.xcoord,d.ycoord,centerx,centery)) - 15})

		 // .attr("y", function(d) { return (findy(d[datapath],d.xcoord,d.ycoord,centerx,centery)) - 10})

		  ;
		  



		  svg.selectAll("text.ringlabel")

		  .data([1.0, .9, .8, .7, .6, .5, .4, .3, .2, .1])

		  .text(function(d) { return (d*w + "m")})
		  
		  //function(d) { return (d == .2) ? "" + (Math.round((d * max) * 10)/10 ) + ringtype : (Math.round((d * max) * 10)/10 )})

			   //.transition()

			  // .duration(3000)

			    .style("opacity", 1)
				
				.attr("font-family", "sans-serif")
	    .attr("font-size", "13px")

		  ;

		  svg.selectAll("path")

			   // .transition()

			    //.duration(3000)

			    .style("opacity", 0);

		  ;
		  
		  
		  	  function findx(costin, thisx, thisy, cenx, ceny) {

				var xramp=d3.scale.linear().domain([0,100]).range([0,w]);

				var yramp=d3.scale.linear().domain([0,100]).range([0,h]);

				

				var costramp=d3.scale.linear().domain([0,max]).range([0,1000]);



					var xdiff = xramp(thisx) - xramp(cenx) + .001;
						console.log((thisx));

							console.log(xramp(thisx));
							
						
					var ydiff = yramp(thisy) - yramp(ceny) + .001;

					

					var hypotenuse = Math.sqrt((Math.pow(xdiff,2)) + (Math.pow(ydiff,2)));

					var ratio = costramp(costin) / hypotenuse;

				  

			  return (ratio * xdiff) + (w / 2);

		  }
		  
		  	  function findy(costin, thisx, thisy, cenx, ceny) {

				var xramp=d3.scale.linear().domain([0,100]).range([0,w]);

				var yramp=d3.scale.linear().domain([0,100]).range([0,h]);

				

				var costramp=d3.scale.linear().domain([0,max]).range([0,1000]);



					var xdiff = xramp(thisx) - xramp(cenx) + .001;

					var ydiff = yramp(thisy) - yramp(ceny) + .001;

					

					var hypotenuse = Math.sqrt(Math.pow(xdiff,2) + Math.pow(ydiff,2));

					var ratio = costramp(costin) / hypotenuse;

				  

			  return (ratio * ydiff) + (h / 2);

		  }