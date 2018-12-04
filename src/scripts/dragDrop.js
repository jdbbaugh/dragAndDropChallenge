const DragDropManager = Object.create(null, {
    init: {
      value: () => {
        const stages = document.querySelectorAll(".stage")
  
        stages.forEach(stage => {
          // Gain reference of item being dragged
          stage.ondragstart = e => {
            // console.log(e)
            e.dataTransfer.setData("text", e.target.classList)
          }
        })
  
  
        const targets = document.querySelectorAll(".target")
  
        targets.forEach(target => {
          // Dragover not supported by default. Turn that off.
          target.ondragover = e => e.preventDefault()
  
          target.ondrop = e => {
            // Enabled dropping on targets
            e.preventDefault()
  
            // Determine what's being dropped
            const data = e.dataTransfer.getData("text")
            // console.log(e.target)
            // console.log(data.split(" ")[1])

            // Append card to target component as child
            // TODO: This should only happen if the target has no children nodes
            if (e.target.classList[2] === 'origin'){
            e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
          }else if (!e.target.hasChildNodes()) {
            e.target.appendChild(document.querySelector(`.${data.split(" ")[1]}`))
                }
          }
        })
      }
    }
  })
  
  DragDropManager.init()