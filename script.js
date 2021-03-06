function drawThreeCircles(divId) {

    var width = 550, height=400;

    // create an SVG element
    var svg = d3.select(divId)
                .append('svg')
                .attr('width', width)
                .attr('height', height)

    var gMain = svg.append('g');

    let points = [10,50,20,70];

    var circles = gMain.selectAll('circle')
       .data(points)
       .enter()
       .append('circle')

    let xScale = d3.scalePoint()
        .domain(points)
        .padding(1)
        .range([0, width]);

    circles.attr('cx', xScale)
        .attr('cy', height / 2);

    let rScale = d3.scaleLinear()
        .domain(d3.extent(points))
        .range([10,20]);

    circles.attr('r', rScale);

    function moveToRandom() {
        var N = 20; 
        // create an array like this [1,2,3...]
        var domain = Array.apply(null, {length: N}).map(Number.call, Number)
        var color = d3.scaleOrdinal(d3.schemeCategory20).domain(domain);

        circles
        .transition()
        .attr('cx', () => Math.random() * width)
        .attr('cy', () => Math.random() * height)
        .attr('fill', color(Math.floor(Math.random() * 20)))
        .on('end', moveToRandom);
    }

    //moveToRandom();
    /*
    let zoom = d3.zoom()
        .on('zoom', () => {
            gMain.attr('transform', d3.event.transform);   
        });

    svg.call(zoom)
    */

    let gBrush = svg.append('g');
    let brush = d3.brush();

    gBrush.call(brush);

    let scale = d3.scaleLinear().domain([234, 567]).range([20,400])

    scale.ticks();
    console.log('scale.ticks():', scale.ticks());

    let c = d3.color('Turquoise')
    console.log('color', c)

}

