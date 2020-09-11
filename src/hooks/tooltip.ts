export const useTooltip = () => {
    let tooltip: HTMLElement | null = null

    tooltip = document.getElementById('CarbonaraTooltip')
    if (!tooltip) {
        const body = document.querySelector('body')

        const tooltipComponent = document.createElement('div')
        tooltipComponent.id = 'CarbonaraTooltip'
        tooltipComponent.classList.add('CarbonaraTooltip')

        body?.appendChild(tooltipComponent)
        tooltip = document.getElementById('CarbonaraTooltip')

        tooltip?.addEventListener('mouseover', () => show())
        tooltip?.addEventListener('mouseleave', () => hide())
    }

    const show = (content?: string | string[], target?: HTMLElement | null) => {
        if (!!tooltip) {
            tooltip.classList.add('CarbonaraTooltip--Show')
            if (!!content) { 
                tooltip.innerHTML = Array.isArray(content)
                    ? content.map(_content => `<p>${_content}</p>`).join(' ')
                    : content
            }
            if (!!target) {
                const parentTableBoundingClient = target.closest('tbody')?.getBoundingClientRect()
                const boundingClient = target.getBoundingClientRect()

                if (!!parentTableBoundingClient) {
                    const targetTotalHeight = boundingClient.y + (boundingClient.height / 2)
                    const parentTotalHeight = parentTableBoundingClient.y + parentTableBoundingClient.height

                    if (targetTotalHeight > parentTotalHeight) {
                        tooltip.classList.remove('CarbonaraTooltip--Show')
                    }
                }

                const tooltipY = boundingClient.y + boundingClient.height
                const tooltipX = (boundingClient.x + boundingClient.width / 2) - (target.getBoundingClientRect().width / 2)

                tooltip.style.top = `${tooltipY}px`
                tooltip.style.left = `${tooltipX}px`
            }
        }
    }

    const hide = () => {
        if (!!tooltip) {
            tooltip?.classList.remove('CarbonaraTooltip--Show')
        }
    }

    return [show, hide]
}
