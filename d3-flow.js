// Test
/* let data = [
    { x: 100, y: 100 },
    { x: 200, y: 200 },
    { x: 300, y: 300 }
]
svg.selectAll('circle')
    .data(data)
    .enter().append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 2.5) */







/* Test - 2 - START */

// Data
let data = [
    { x: 100, y: 100 },
    { x: 200, y: 200 },
    { x: 300, y: 300 }
]

// NOTE: selectAll() names the group && append() names the actual shape

// Step-1: SVG / The Plot of Land
let svg = d3.select('body') // Adding svg element to body
    .append('svg')
        .attr('width', '800px')
        .attr('height', '800px')

// Step-2: selectAll / Creating Holes
svg.selectAll('circle') // Creating the holes || Digging the holes
// Step-3: Data / The seeds
    .data(data) // Adding the seeds
    // Step-4: Enter / Put seeds in Holes
    .enter()
    // Step-5: Append / The Structure of your Plants
    .append('circle')
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)

/* Test - 2 - END */


/* Linear Scale */
Domain [0 ... 1000 ] <= Data Space
Range [0 ... 100 ] <= Screen Space

const xScale = linearScale() // Linear Scale
    .domain([0, max(data, d => d.population)]) // Data Space
    .range([0, width]) // Screen Space
/* Linear Scale */

/* scaleBand */
domain(data.map(d => d.country)) <= Data Space Domain
range([0, height]) <= Screen Space Range
/* scaleBand */

bandwidth: bandwidth is the computed width of the single bar


/* The Margin Convention */

/* The Margin Convention */