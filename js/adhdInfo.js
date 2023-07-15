// adhdInfo.js

document.addEventListener('DOMContentLoaded', function () {
  // Array of expert data
  var experts = [
    {
      name: '전문가 이름',
      affiliation: '전문가 소속',
      imageURL: 'images/Tom-Brown.jpg',
      description: '이곳에 전문가의 ADHD에 대한 의견을 간략하게 입력하세요...',
      detailURL: '#',
    },
    // Add more experts here
  ]

  var expertsContainer = document.getElementById('experts')

  // Loop through each expert and create the HTML
  experts.forEach(function (expert) {
    var expertInfoDiv = document.createElement('div')
    expertInfoDiv.className = 'expert-info'

    var leftDiv = document.createElement('div')
    leftDiv.className = 'left-section'

    var imageDiv = document.createElement('div')
    imageDiv.className = 'image-container'
    var expertImage = document.createElement('img')
    expertImage.src = expert.imageURL
    expertImage.alt = 'Expert Image'
    imageDiv.appendChild(expertImage)

    var nameTitleDiv = document.createElement('div')
    nameTitleDiv.className = 'name-title'
    var nameHeader = document.createElement('h3')
    nameHeader.textContent = expert.name
    var affiliationPara = document.createElement('p')
    affiliationPara.textContent = expert.affiliation
    nameTitleDiv.appendChild(nameHeader)
    nameTitleDiv.appendChild(affiliationPara)

    leftDiv.appendChild(imageDiv)
    leftDiv.appendChild(nameTitleDiv)

    var rightDiv = document.createElement('div')
    rightDiv.className = 'right-section'

    var previewPara = document.createElement('p')
    previewPara.className = 'preview-text'
    previewPara.textContent = expert.description

    var moreBtn = document.createElement('a')
    moreBtn.href = expert.detailURL
    moreBtn.className = 'more-btn'
    moreBtn.textContent = '더 보기'

    rightDiv.appendChild(previewPara)
    rightDiv.appendChild(moreBtn)

    expertInfoDiv.appendChild(leftDiv)
    expertInfoDiv.appendChild(rightDiv)

    // Append the expert info div to the container
    expertsContainer.appendChild(expertInfoDiv)
  })
})
