"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../enums/index");
Component({
    properties: {
        status: {
            type: String,
            value: index_1.EnumApiStatus.fetching,
        },
        title: {
            type: String,
            value: '',
        },
        image: {
            type: String,
            value: '',
        },
        cardClass: {
            type: String,
            value: '',
        },
        footer: {
            type: String,
            value: '',
        },
    },
    data: {
        enumStatus: index_1.EnumApiStatus,
    },
    methods: {
        fetch: function () {
            this.triggerEvent('fetch');
        },
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUdsRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxxQkFBYSxDQUFDLFFBQVE7U0FDOUI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxxQkFBYTtLQUMxQjtJQUtELE9BQU8sRUFBRTtRQUNQLEtBQUs7WUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1BcGlTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9pbmRleCc7XG5cbi8vIEB0cy1pZ25vcmVcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBzdGF0dXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGltYWdlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgfSxcbiAgICBjYXJkQ2xhc3M6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGZvb3Rlcjoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGVudW1TdGF0dXM6IEVudW1BcGlTdGF0dXMsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIGZldGNoKCkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2ZldGNoJyk7XG4gICAgfSxcbiAgfSxcbn0pO1xuIl19