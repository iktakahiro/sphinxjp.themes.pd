import "./sass/pd.sass"

$(() => {

    const admonitions = {
        "note": "message",
        "warning": "warning",
        "admonition-todo": "bookmark",
    }
    const iconSize = "md-30"

    $.each(admonitions, (cls, text) => {
        let container = $(`div.${cls} > p.admonition-title`);
        container.prepend(`<i class="material-icons ${iconSize}">${text}</i>`)
    })

    $("a.headerlink").html("").prepend(`<i class="material-icons">link</i>`)

    const domain_classes = {
        "function": "function",
        "class": "class",
        "method": "method",
        "staticmethod": "staticmethod",
        "classmethod": "classmethod",
    }

    $.each(domain_classes, (cls, text) => {
        let container_dt = $(`dl.${cls} > dt`)
        let container_em = $(`dl.${cls} > dt > em.property`)

        if (!container_em[0]) {
            container_dt.prepend(`<em class="property">${text}</em>`)
        }

        container_dt.prepend(`<i class="material-icons ${iconSize}">code</i>`)
    })
})
