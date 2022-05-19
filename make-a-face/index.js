const { select, arc } = d3;

const svg = select('svg')

const height = parseFloat(svg.attr('height'))
const width = parseFloat(svg.attr('width'))
const eyeRadius = 40
const eyeSpacing = 100
const eyeYOffset = -70
const eyebrowWidth = 70
const eyebrowHeight = 15
const eyebrowYOffset = 70

const outerGroup = svg.append('g')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)

const circle = outerGroup.append('circle')
    .attr('r', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black')

const eyesGroup = outerGroup.append('g')
    .attr('transform', `translate(0, ${eyeYOffset})`)

const leftEye = eyesGroup.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', eyeSpacing)

const rightEye = eyesGroup.append('circle')
    .attr('r', eyeRadius)
    .attr('cx', -eyeSpacing)

const leftEyebrow = eyesGroup.append('rect')
    .attr('x', -eyeSpacing - eyebrowWidth / 2)
    .attr('y', -eyebrowYOffset)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)

const rightEyebrow = eyesGroup.append('rect')
    .attr('x', eyeSpacing - eyebrowWidth / 2)
    .attr('y', -eyebrowYOffset)
    .attr('width', eyebrowWidth)
    .attr('height', eyebrowHeight)

const mouth = outerGroup.append('path')
    .attr('d', arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }))