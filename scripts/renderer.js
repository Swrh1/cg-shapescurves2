class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d', {willReadFrequently: true});
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
        // TODO: draw at least 2 Bezier curves
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let curve1 = {p0: {x: 100, y: 100}, p1: {x: 10, y: 500}, p2: {x: 500, y: 500}, p3: {x: 250, y: 100}};
        let curve2 = {p0: {x: 50, y: 50}, p1: {x: 55, y: 500}, p2: {x: 600, y: 50}, p3: {x: 750, y: 500}};
        
        this.drawBezierCurve(curve1.p0, curve1.p1, curve1.p2, curve1.p3, this.num_curve_sections, [255,0,0,255], framebuffer);
        this.drawBezierCurve(curve2.p0, curve2.p1, curve2.p2, curve2.p3, this.num_curve_sections, [0,0,255,255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
        // TODO: draw at least 2 circles
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        let center1 = {x: 100, y: 100};
        let radius1 = 100;
        let center2 = {x: 500, y: 500};
        let radius2 = 250;
        let num_edges = this.num_curve_sections;
        this.drawCircle(center1, radius1, num_edges, [255,0,0,255], framebuffer);
        this.drawCircle(center2, radius2, num_edges, [0,0,255,255], framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
        // TODO: draw at least 2 convex polygons (each with a different number of vertices >= 5)
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        
        
        // Following lines are example of drawing a single triangle
        // (this should be removed after you implement the polygon)
        let point_a = {x:  80, y:  80};
        let point_b = {x: 200, y: 80};
        let point_c = {x: 300, y: 100};
        let point_d = {x:  250, y:  200};
        let point_e = {x: 100, y: 100};
        let vertex_list = [point_a, point_b, point_c, point_d, point_e];
        let point_g = {x:500,y:500};
        let point_h = {x:550,y:400};
        let point_i = {x:650,y:330};
        let point_j = {x:800,y:600};
        let point_k = {x:600,y:600};
        let vertex_list2 = [point_g, point_h, point_i, point_j,point_k];
        this.drawConvexPolygon(vertex_list, [255,0,0,255],framebuffer);
        this.drawConvexPolygon(vertex_list2, [0,0,255,255],framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
        // TODO: draw your name!
        //   - variable `this.num_curve_sections` should be used for `num_edges`
        //   - variable `this.show_points` should be used to determine whether or not to render vertices
        //S
        let curve1 = {p0: {x: 10, y: 200}, p1: {x: 500, y: 200}, p2: {x: -200, y: 400}, p3: {x: 200, y: 400}};
        this.drawBezierCurve(curve1.p0, curve1.p1, curve1.p2, curve1.p3, this.num_curve_sections, [255,0,0,255], framebuffer);
        //E
        let p1 = {x:250,y:200};
        let p2 = {x:255,y:200};
        let p4 = {x:250,y:405};
        let p3 = {x:255,y:405};
        let vertex_list = [p1,p2,p3,p4];
        this.drawConvexPolygon(vertex_list,[0,255,0,255],framebuffer);
        p1 = {x:255,y:200};
        p2 = {x:255,y:205};
        p3 = {x:355,y:205};
        p4 = {x:355,y:200};
        vertex_list = [p1,p2,p3,p4];
        this.drawConvexPolygon(vertex_list,[0,255,0,255],framebuffer);
        p1 = {x:255,y:400};
        p2 = {x:255,y:405};
        p3 = {x:355,y:405};
        p4 = {x:355,y:400};
        vertex_list = [p1,p2,p3,p4];
        this.drawConvexPolygon(vertex_list,[0,255,0,255],framebuffer);
        p1 = {x:255,y:300};
        p2 = {x:255,y:305};
        p3 = {x:355,y:305};
        p4 = {x:355,y:300};
        vertex_list = [p1,p2,p3,p4];
        this.drawConvexPolygon(vertex_list,[0,255,0,255],framebuffer);
        //T
        p1 = {x: 405, y: 405};
        p2 = {x: 505, y: 405};
        this.drawLine(p1,p2,[255,0,255,255],framebuffer);
        p1 = {x: 450, y: 405};
        p2 = {x: 450, y: 200};
        this.drawLine(p1,p2,[255,0,255,255],framebuffer);
        //H
        for (let i = 200; i<405 ; i+=5)
        {
            p1 = {x:555, y: i};
            p2 = {x:655, y:i};
            this.drawCircle(p1, 4, this.num_curve_sections, [0,0,255,255],framebuffer);
            this.drawCircle(p2, 4, this.num_curve_sections, [0,0,255,255],framebuffer);
        }
        for (let i = 555; i<655 ; i+=5)
        {
            p1 = {x:i, y:300};
            p2 = {x:i, y:300};
            this.drawCircle(p1, 4, this.num_curve_sections, [0,0,255,255],framebuffer);
            this.drawCircle(p2, 4, this.num_curve_sections, [0,0,255,255],framebuffer);
        }
    }

    // p0:           object {x: __, y: __}
    // p1:           object {x: __, y: __}
    // p2:           object {x: __, y: __}
    // p3:           object {x: __, y: __}
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(p0, p1, p2, p3, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a Bezier curve
        let increment = 1/num_edges;
        let start, end, xpos, ypos;
        let t = 0;
       while (t<1)
       {
            xpos = Math.pow(1-t, 3) * p0.x + 3*Math.pow(1-t,2)*t*p1.x+3*(1-t)*Math.pow(t,2)*p2.x + Math.pow(t,3)*p3.x;
            ypos = Math.pow(1-t, 3) * p0.y + 3*Math.pow(1-t,2)*t*p1.y+3*(1-t)*Math.pow(t,2)*p2.y + Math.pow(t,3)*p3.y;

            start = {x: parseInt(xpos), y: parseInt(ypos)};

            t += increment;
            if (t > 1)
            {
                t = 1;
            }

            xpos = Math.pow(1-t, 3) * p0.x + 3*Math.pow(1-t,2)*t*p1.x+3*(1-t)*Math.pow(t,2)*p2.x + Math.pow(t,3)*p3.x;
            ypos = Math.pow(1-t, 3) * p0.y + 3*Math.pow(1-t,2)*t*p1.y+3*(1-t)*Math.pow(t,2)*p2.y + Math.pow(t,3)*p3.y;

            end = {x: parseInt(xpos), y: parseInt(ypos)};

            this.drawLine(start, end, color, framebuffer);
            //If we want to show points do so here
            if(this.show_points)
            {
                this.drawPoint(start, color,framebuffer);
            }
        }
        if (this.show_points)
        {
            this.drawPoint(p0, color,framebuffer);
            this.drawPoint(p1, [0,255,255,255],framebuffer);
            this.drawPoint(p2, [0,255,255,255],framebuffer);
            this.drawPoint(p3, color,framebuffer);
        }
    }

    // center:       object {x: __, y: __}
    // radius:       int
    // num_edges:    int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, num_edges, color, framebuffer) {
        // TODO: draw a sequence of straight lines to approximate a circle
        let increment = 2*Math.PI / num_edges;
        let i = 0;
        let xpos, ypos, start, end;
        while (i <= 2*Math.PI)
        {
            xpos = Math.round(center.x + radius*Math.cos(i));
            ypos = Math.round(center.y + radius*Math.sin(i));
            start = {x:xpos,y:ypos};
            i += increment;
            xpos = Math.round(center.x + radius*Math.cos(i));
            ypos = Math.round(center.y + radius*Math.sin(i));
            end = {x:xpos,y:ypos};
            this.drawLine(start, end, color, framebuffer);
            if(this.show_points)
            {
                this.drawPoint(start,color,framebuffer);
            }
            if(this.show_points)
            {
                this.drawPoint(start, color,framebuffer);
            }
        }
        if (this.show_points)
        {
            this.drawPoint(end, color,framebuffer);
        }
    }

    drawPoint(point,color,framebuffer)
    {
        if (point.x<0 || point.y<0)
        {
            return;
        }
        let num_edges = 10;
        let radius = 3;
        let increment = 2*Math.PI / num_edges;
        let i = 0;
        let xpos, ypos, start, end;
        while (i < 2*Math.PI)
        {
            xpos = Math.round(point.x + radius*Math.cos(i));
            ypos = Math.round(point.y + radius*Math.sin(i));
            start = {x:xpos,y:ypos};
            i += increment;
            xpos = Math.round(point.x + radius*Math.cos(i));
            ypos = Math.round(point.y + radius*Math.sin(i));
            end = {x:xpos,y:ypos};
            this.drawTriangle(point,start,end,color,framebuffer);
        }
    }
    
    // vertex_list:  array of object [{x: __, y: __}, {x: __, y: __}, ..., {x: __, y: __}]
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawConvexPolygon(vertex_list, color, framebuffer) {
        // TODO: draw a sequence of triangles to form a convex polygon
        let main = vertex_list[0];
        let current, next;
        for (let i = 1; i<vertex_list.length-1;i++)
        {
            current = vertex_list[i];
            next = vertex_list[i+1];
            this.drawTriangle(main,current,next,color,framebuffer);
        }

        if (this.show_points)
        {
            vertex_list.forEach(element => this.drawPoint(element, color, framebuffer));
        }
    }
    
    // v:            object {x: __, y: __}
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawVertex(v, color, framebuffer) {
        // TODO: draw some symbol (e.g. small rectangle, two lines forming an X, ...) centered at position `v`
        
        
    }
    
    /***************************************************************
     ***       Basic Line and Triangle Drawing Routines          ***
     ***       (code provided from in-class activities)          ***
     ***************************************************************/
    pixelIndex(x, y, framebuffer) {
	    return 4 * y * framebuffer.width + 4 * x;
    }
    
    setFramebufferColor(framebuffer, px, color) {
	    framebuffer.data[px + 0] = color[0];
	    framebuffer.data[px + 1] = color[1];
	    framebuffer.data[px + 2] = color[2];
	    framebuffer.data[px + 3] = color[3];
    }
    
    swapPoints(a, b) {
        let tmp = {x: a.x, y: a.y};
        a.x = b.x;
        a.y = b.y;
        b.x = tmp.x;
        b.y = tmp.y;
    }

    drawLine(p0, p1, color, framebuffer) {
        if (Math.abs(p1.y - p0.y) <= Math.abs(p1.x - p0.x)) { // |m| <= 1
            if (p0.x < p1.x) {
                this.drawLineLow(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineLow(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
        else {                                        // |m| > 1
            if (p0.y < p1.y) {
                this.drawLineHigh(p0.x, p0.y, p1.x, p1.y, color, framebuffer);
            }
            else {
                this.drawLineHigh(p1.x, p1.y, p0.x, p0.y, color, framebuffer);
            }
        }
    }

    drawLineLow(x0, y0, x1, y1, color, framebuffer) {
        let A = y1 - y0;
        let B = x0 - x1;
        let iy = 1;
        if (A < 0) {
            iy = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (x <= x1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            x += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                y += iy;
            }
        }
    }

    drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
        let A = x1 - x0;
        let B = y0 - y1;
        let ix = 1;
        if (A < 0) {
            ix = -1;
            A *= -1;
        }
        let D = 2 * A + B;
        let x = x0;
        let y = y0;
        let px;
        while (y <= y1)
        {
            px = this.pixelIndex(x, y, framebuffer);
            this.setFramebufferColor(framebuffer, px, color);
            y += 1;
            if (D <= 0)
            {
                D += 2 * A;
            }
            else
            {
                D += 2 * A + 2 * B;
                x += ix;
            }
        }
    }
    
    drawTriangle(p0r, p1r, p2r, color, framebuffer) {
        //Had to add this in becasue it was creating a shallow copy and messing up my points
        ///
        let p0 = {x:p0r.x, y:p0r.y};
        let p1 = {x:p1r.x, y:p1r.y};
        let p2 = {x:p2r.x, y:p2r.y};
        ///

        // Sort points in ascending y order
        if (p1.y < p0.y) this.swapPoints(p0, p1);
        if (p2.y < p0.y) this.swapPoints(p0, p2);
        if (p2.y < p1.y) this.swapPoints(p1, p2);
        
        // Edge coherence triangle algorithm
        // Create initial edge table
        let edge_table = [
            {x: p0.x, inv_slope: (p1.x - p0.x) / (p1.y - p0.y)}, // edge01
            {x: p0.x, inv_slope: (p2.x - p0.x) / (p2.y - p0.y)}, // edge02
            {x: p1.x, inv_slope: (p2.x - p1.x) / (p2.y - p1.y)}  // edge12
        ];
        
        // Do cross product to determine if pt1 is to the right/left of edge02
        let v01 = {x: p1.x - p0.x, y: p1.y - p0.y};
        let v02 = {x: p2.x - p0.x, y: p2.y - p0.y};
        let p1_right = ((v01.x * v02.y) - (v01.y * v02.x)) >= 0;
        
        // Get the left and right edges from the edge table (lower half of triangle)
        let left_edge, right_edge;
        if (p1_right) {
            left_edge = edge_table[1];
            right_edge = edge_table[0];
        }
        else {
            left_edge = edge_table[0];
            right_edge = edge_table[1];
        }
        // Draw horizontal lines (lower half of triangle)
        for (let y = p0.y; y < p1.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) { 
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
        
        // Get the left and right edges from the edge table (upper half of triangle) - note only one edge changes
        if (p1_right) {
            right_edge = edge_table[2];
        }
        else {
            left_edge = edge_table[2];
        }
        // Draw horizontal lines (upper half of triangle)
        for (let y = p1.y; y < p2.y; y++) {
            let left_x = parseInt(left_edge.x) + 1;
            let right_x = parseInt(right_edge.x);
            if (left_x <= right_x) {
                this.drawLine({x: left_x, y: y}, {x: right_x, y: y}, color, framebuffer);
            }
            left_edge.x += left_edge.inv_slope;
            right_edge.x += right_edge.inv_slope;
        }
    }
};
