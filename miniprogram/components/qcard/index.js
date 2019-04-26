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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFrRDtBQUdsRCxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxxQkFBYSxDQUFDLFFBQVE7U0FDOUI7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxLQUFLLEVBQUU7WUFDTCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7UUFDRCxNQUFNLEVBQUU7WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRjtJQUtELElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxxQkFBYTtLQUMxQjtJQUtELE9BQU8sRUFBRTtRQUNQLEtBQUs7WUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1BcGlTdGF0dXMgfSBmcm9tICcuLi8uLi9lbnVtcy9pbmRleCc7XG5cbi8vIEB0cy1pZ25vcmVcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBzdGF0dXM6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiBFbnVtQXBpU3RhdHVzLmZldGNoaW5nLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9LFxuICAgIGltYWdlOiB7IC8vIOebuOWvueacrOe7hOS7tueahOWbvueJh+i3r+W+hFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICcnLFxuICAgIH0sXG4gICAgY2FyZENsYXNzOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJycsXG4gICAgfSxcbiAgICBmb290ZXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBlbnVtU3RhdHVzOiBFbnVtQXBpU3RhdHVzLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBmZXRjaCgpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdmZXRjaCcpO1xuICAgIH0sXG4gIH0sXG59KTtcbiJdfQ==