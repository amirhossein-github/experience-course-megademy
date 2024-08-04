const PN = [1, -1] // Positive and Negative as PN
const MO = ['+', '-', '*', '/', '**'] // Math Operators as MO
const x = 9 // Input Number as x

for (const i1 in PN){
    for (const i2 in PN){
        for (const i3 in PN){
            for (const i4 in PN){
                for (const i5 in MO){
                    for (const i6 in MO){
                            // +-1 * ((+-1 * x) MO (+-1 * x)) MO (+-1 *  x)  ---> (x _ x) _ x
                            let model_1 = `${PN[i1]} * ( (${PN[i2]} * ${x}) ${MO[i5]} (${PN[i3]} *  ${x}) ) ${MO[i6]} (${PN[i4]} * ${x})`

                            // +-1 * x MO (+-1 * ((+-1 * x) MO (+-1 * x))) ---> x _ (x _ x)
                            let model_2 = `(${PN[i2]} * ${x}) ${MO[i5]} ( ${PN[i1]} * ( (${PN[i3]} *  ${x}) ${MO[i6]} (${PN[i4]} * ${x})))`

                            // +-1 * ((+-1 * x) MO (+-1 * x) MO (+-1 * x)) ---> (x _ x _ x)
                            let model_3 = `${PN[i1]} * ( (${PN[i2]} * ${x}) ${MO[i5]} (${PN[i3]} *  ${x}) ${MO[i6]} (${PN[i4]} * ${x}))`

                            // (+-1 * x) MO (+-1 * x) MO (+-1 * x) ---> x _ x _ x
                            let model_4 = `(${PN[i1]} * ${x}) ${MO[i5]} (${PN[i2]} * ${x}) ${MO[i6]} (${PN[i3]} * ${x})`

                            // Show the result
                            console.log(model_1, ' === ', eval(model_1))
                            console.log(model_2, ' === ', eval(model_2))
                            console.log(model_3, ' === ', eval(model_3))
                            console.log(model_4, ' === ', eval(model_4))
}}}}}}