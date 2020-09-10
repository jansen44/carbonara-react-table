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

    const show = (content?: string, target?: HTMLElement | null) => {
        if (!!tooltip) {
            tooltip.classList.add('CarbonaraTooltip--Show')
            if (!!content) { tooltip.innerHTML = content }
            if (!!target) {
                const boundingClient = target.getBoundingClientRect()
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
