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
                    ? content.map(_content => (
                        `<p>${typeof _content === 'string' ? _content.split('_').join(' ') : _content}</p>`
                    )).join(' ')
                    : `<p>${typeof content === 'string' ? content.split('_').join(' ') : content}</p>`
            }
            if (!!target) {
                const parentTableBoundingClient = target.closest('.CarbonaraTable-TableContainer')?.getBoundingClientRect()
                    || target.closest('.CarbonaraTable-DataGridContainer')?.getBoundingClientRect()
                const boundingClient = target.getBoundingClientRect()

                if (!!parentTableBoundingClient) {
                    const targetTotalHeight = boundingClient.y + (boundingClient.height / 2)
                    const targetTotalWidth = boundingClient.x + (boundingClient.width / 1.5)
                    const parentTotalHeight = parentTableBoundingClient.y + parentTableBoundingClient.height
                    const parentTotalWidth = parentTableBoundingClient.x + parentTableBoundingClient.width

                    if (
                        targetTotalHeight > parentTotalHeight
                        || targetTotalWidth > parentTotalWidth
                        || boundingClient.x < parentTableBoundingClient.x / 1.5
                    ) {
                        tooltip.classList.remove('CarbonaraTooltip--Show')
                    }
                }

                tooltip.style.top = `${boundingClient.y + boundingClient.height}px`
                tooltip.style.left = `${(boundingClient.x + boundingClient.width / 2) - (boundingClient.width / 2)}px`

                const tooltipRect = tooltip.getBoundingClientRect()
                if (!!parentTableBoundingClient && boundingClient.x < parentTableBoundingClient.x) {
                    tooltip.style.left = `${parentTableBoundingClient.x}px`
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
