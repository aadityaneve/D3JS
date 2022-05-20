const { select, 
    csv, 
    scaleLinear, 
    max, 
    scaleBand,
    axisLeft,
    axisBottom
 } = d3

const svg = select('svg')
const width = parseFloat(svg.attr('width'))
const height = parseFloat(svg.attr('height'))

// Step-2: Creating rectangles for each row
const render = (data) => {
    // D3 Data Join
    // Data Join ( enter, update, exit )

    const xValue = d => d.population
    const yValue = d => d.country
    const margin = { top: 20, right: 20, bottom: 20, left: 100 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const group = svg.append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const xScale = scaleLinear() // Linear Scale
        .domain([0, max(data, xValue)]) // Data Space
        .range([0, innerWidth]) // Screen Space

    const yScale = scaleBand()
        .domain(data.map(yValue)) // Country names
        .range([0, innerHeight]) // Will set each bar height

    const yAxis = axisLeft(yScale)
        // yAxis(group.append('g'))
        group.append('g').call(yAxis)

    const xAxis = axisBottom(xScale)
        // xAxis(group.append('g'))
        group.append('g').call(xAxis)
            .attr('transform', `translate(${0}, ${innerHeight})`)

        
    // console.log(yScale.domain())
    // console.log(xScale.range())    

    group.selectAll('rect').data(data)
        .enter().append('rect')
            .attr('y', d => yScale(yValue(d)))
            .attr('width', d => xScale(xValue(d)))
            .attr('height', yScale.bandwidth())
            .attr('fill', 'black')
}

// Step-1: Representing a data table in javascript
csv('data.csv')
    .then((data) => {
        // Parsing each country population into number
        data.forEach((d) => {
            d.population = parseInt(d.population * 1000)
        })
        // console.log(data)

        render(data)
    })



