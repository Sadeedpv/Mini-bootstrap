function Styles(options){
    let object = document.querySelectorAll('.apply-styles');

    // Shadow
    if (options.shadow === 'hard'){
        options.shadow = '0px';
    }else if(options.shadow === 'soft'){
        options.shadow = '15px';        
    }

    object.forEach(element => {
        element.style.boxShadow = `10px 10px ${options.shadow} 1px rgba(0,0,0,0.5)`;
    })

    // Border

    if (options.border === 'hard'){
        options.border = '4px solid black';
    }else if(options.border === 'soft'){
        options.border = '2px solid black';        
    }

    object.forEach(element => {
        element.style.border = options.border;
    })

    // Padding
    if (options.padding === 'p-1'){
        options.padding = '0.25rem';
    }else if(options.padding === 'p-2'){
        options.padding = '0.5rem';        
    }else if(options.padding === 'p-3'){
        options.padding = '0.75rem';        
    }else if(options.padding === 'p-4'){
        options.padding = '1rem';        
    }else if(options.padding === 'p-5'){
        options.padding = '1.25rem';        
    }

    object.forEach(element => {
        element.style.padding = options.padding;
    })

    // Margin
    if (options.margin === 'm-1'){
        options.margin = '0.25rem';
    }else if(options.margin === 'm-2'){
        options.margin = '0.5rem';        
    }else if(options.margin === 'm-3'){
        options.margin = '0.75rem';
    }else if(options.margin === 'm-4'){
        options.margin = '1rem';        
    }else if(options.margin === 'm-5'){
        options.margin = '1.25rem';        
    }

    object.forEach(element => {
        element.style.margin = options.margin;
    })

    // Font-size
    if (options.fontSize === 'sm'){
        options.fontSize = '0.875rem';
    }else if(options.fontSize === 'md'){
        options.fontSize = '1.25rem';
    }else if(options.fontSize === 'lg'){
        options.fontSize = '1.5rem';        
    }

    object.forEach(element => {
        element.style.fontSize = options.fontSize;
    })

    // Font-weight
    if (options.fontWeight === 'bold'){
        options.fontWeight = 'bold';
    }else if(options.fontWeight === 'normal'){
        options.fontWeight = 'normal';        
    }else if(options.fontWeight === 'light'){
        options.fontWeight = 'light';        
    }else if(options.fontWeight === 'medium'){
        options.fontWeight = 'medium';        
    }

    object.forEach(element => {
        element.style.fontWeight = options.fontWeight;
    })
}


module.exports.Styles = Styles;