using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PileBox
{
	class Program
	{
		static void Main(string[] args)
		{
			Pile p1 = new Pile();
			p1.AddBox(new Box(2, 2));
			p1.AddBox(new Box(1, 1));
			p1.AddBox(new Box(1, 2));
			p1.AddBox(new Box(2, 1));
			var h1 = p1.Height;

			Pile p2 = new Pile();
			p2.AddBox(new Box(5, 7));
			p2.AddBox(new Box(3, 4));
			p2.AddBox(new Box(1, 2));
			p2.AddBox(new Box(2, 3));
			p2.AddBox(new Box(4, 2));
			p2.AddBox(new Box(4, 4));
			var h2 = p2.Height;

			Pile p3 = new Pile();
			p3.AddBox(new Box(3, 1));
			p3.AddBox(new Box(2, 2));
			p3.AddBox(new Box(1, 3));
			p3.AddBox(new Box(6, 9));
			p3.AddBox(new Box(5, 8));
			p3.AddBox(new Box(3, 7));
			p3.AddBox(new Box(4, 2));
			p3.AddBox(new Box(3, 1));
			p3.AddBox(new Box(2, 2));
			p3.AddBox(new Box(1, 4));
			var h3 = p3.Height;

			Console.WriteLine(h1 == 4 && h2 == 11 && h3 == 14);
			Console.ReadKey();
		}
	}
}
