
function op(){
    document.getElementById('menuu').style.display="block";
    var a = false;
    if(a){
        document.getElementById('phme').setAttribute("onclick","op()");
        a= false
    }
    else{
        document.getElementById('phme').setAttribute("onclick","clo()");
        a= true
    }
}
function clo(){
    document.getElementById('menuu').style.display="none";
    var c = true
    if(c){
        document.getElementById('phme').setAttribute("onclick","op()");
        c = true
    }
    else{
        document.getElementById('phme').setAttribute("onclick","clo()");
        c = false
    }
}
function thl(){
    document.getElementById('lightico').style.display="none"
    document.getElementById('darkico').style.display="block"
    document.getElementById('darkico').style.display="flex"
    document.querySelector('body').style.background = "#f0f2f5"
    var b = true;
    if(b){
        document.getElementById('rot').setAttribute("href","CSS/root-light.css")
        b=true
    }
    else{
        document.getElementById('rot').setAttribute("href","CSS/root-night.css")
        b=false
    }
}

function thd(){
    document.getElementById('darkico').style.display="none"
    document.getElementById('lightico').style.display="block"
    document.getElementById('lightico').style.display="flex"
    document.querySelector('body').style.background = "#18191a"
    var v = true;
    if(v){
        document.getElementById('rot').setAttribute("href","CSS/root-night.css")
        v=true
    }
    else{
        document.getElementById('rot').setAttribute("href","CSS/root-light.css")
        v=false
    }
}


let po = `
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
<div class="post">
<div class="p-h">
<div class="h-r">
<img style="border-radius: 50%;cursor: pointer;" height="40px" width="40px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8"><div>
<span class="n">Friend Name</span>
<span class="time">6 July at 00:23 <i class="fa-solid fa-earth-americas" style="margin-left: 5px;"></i></span></div></div>
<div class="h-l">
<i class="fa-solid fa-ellipsis" style="margin-right: 20px;"></i>
<i class="fa-solid fa-xmark"></i></div></div>
<div class="p-t">This is the main title of the post ❤️❤️</div>
<div class="p-c"><img src="MEDIA/WhatsApp Image 2023-07-13 at 03.03.24.jpg"></div>
<div class="p-r"><div class="r-r">
<img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18">
<p>10M</p>
</div>
<div class="r-l">
<span>200 comments </span>
<p>50K shares</p></div></div>
<div class="p-rr">
<span onclick="like()" id="likke">
<i class="fa-regular fa-thumbs-up" style="color: black;"></i>
<p style="color: black;">Like</p>
</span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -162px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
<p>Comment</p></span><span><i style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/h5xp4-3oByv.png?_nc_eui2=AeGO5MG79lb7eOUgFLyNzT_ZUtYYs5jhWgVS1hizmOFaBfP61ynGU6ZvLPMzaAjPgZWbhvGMnTH_aRtMB6giFpWr&quot;); background-position: 0px -222px; background-size: 26px 538px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i><p>Share</p></span></div>
<div class="p-co">
<img style="border-radius: 50%;cursor: pointer;" height="35px" width="35px" src="https://scontent.fcai19-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGdiUFujg0BX6-q6QLgndAsso2H55p0AlGyjYfnmnQCUXRMNUtXnSbKTQ8fdYaWGEwGwIlA4JDlwoZDmnvnsTN6&_nc_ohc=DH2e7R2-NdgAX9946MK&_nc_ht=scontent.fcai19-8.fna&oh=00_AfAhDq760ROi2uJBuRvZBRTsN1cdQgjccIpkHw9w3jW-Dg&oe=64D28FB8">
<div>Write a comment ....</div></div></div>
`

setTimeout(function(){
    document.getElementById('lod').style.display="none";
    document.getElementById('mposts').innerHTML=po
},2000)

function like(){
    document.getElementById('likke').innerHTML=`
    <i class="fa-solid fa-thumbs-up" style="color:#087bea;"></i>
    <p style="color:#087bea;">Like</p>
    `
    var h = false
    if(h){
        document.getElementById('likke').setAttribute("onclick","like()")
        h = false
    }
    else{
        document.getElementById('likke').setAttribute("onclick","dislike()")
        h = true
    }
    }
    function dislike(){
        document.getElementById('likke').innerHTML=`
        <i class="fa-regular fa-thumbs-up" style="color: black;"></i>
        <p style="color: black;">Like</p>
    `
    var g = true
    if(g){
        document.getElementById('likke').setAttribute("onclick","like()")
        g = true
    }
    else{
        document.getElementById('likke').setAttribute("onclick","dislike()")
        g = false
    }
}
