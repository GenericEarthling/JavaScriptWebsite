function createTabArea()
{
   var side = 100;
   var tbody = document.getElementById( "tablebody" );

   for ( var i = 0; i < side; ++i )
   {
      var row = document.createElement( "tr" );

      for ( var j = 0; j < side; ++j )
      {
         var cell = document.createElement( "td" );
         row.appendChild( cell );
      }

      tbody.appendChild( row );
   }

   document.getElementById( "tabArea" ).addEventListener( "mousemove", processMouseMove, false );
}

function processMouseMove( e )
{
   if ( e.target.tagName.toLowerCase() == "td" )
   {
      if ( e.ctrlKey )
      {
         e.target.setAttribute( "class", "blue" );
      }

      if ( e.shiftKey )
      {
         e.target.setAttribute( "class", "red" );
      }

      if ( e.altKey )
      {
      	e.target.setAttribute("class", "bkgd");
      }

   }
}

window.addEventListener( "load", createTabArea, false );
