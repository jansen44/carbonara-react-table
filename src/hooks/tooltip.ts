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
    }

    const show = (content?: string | string[] | null, target?: HTMLElement | null) => {
        if (!!tooltip && (!!content || tooltip.innerHTML !== '')) {
            tooltip.classList.add('CarbonaraTooltip--Show')
            if (!!content) {
                tooltip.innerHTML = Array.isArray(content)
                    ? content.map(_content => `<p>${_content}</p>`).join(' ')
                    : `<p>${content}</p>`
            }
            if (!!target) {
                const parentTableBoundingClient = target.closest('.CarbonaraTable-TableContainer')?.getBoundingClientRect()
                const boundingClient = target.getBoundingClientRect()

                if (!!parentTableBoundingClient) {
                    const targetTotalHeight = boundingClient.y + (boundingClient.height / 2)
                    const parentTotalHeight = parentTableBoundingClient.y + parentTableBoundingClient.height

                    if (targetTotalHeight > parentTotalHeight) {
                        tooltip.classList.remove('CarbonaraTooltip--Show')
                    }
                }

                tooltip.style.top = `${boundingClient.y + boundingClient.height}px`
                tooltip.style.left = `${(boundingClient.x + boundingClient.width / 2) - (boundingClient.width / 2)}px`

                const tooltipRect = tooltip.getBoundingClientRect()
                if (tooltipRect.x + tooltipRect.width > window.innerWidth) {
                    tooltip.style.left = `${boundingClient.x - tooltipRect.width + parseFloat(window.getComputedStyle(target).paddingLeft)}px`
                }
                if (tooltipRect.y + tooltipRect.height > window.innerHeight) {
                    tooltip.style.top = `${boundingClient.y - tooltipRect.height}px`
                }
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
