/* eslint-disable no-unused-vars */
<template>
  <div>
    <TheNavbar>
      <template>
        <div class="header-box">
          <BaseButton @click.native="addCollection">Добавить</BaseButton>
        </div>
      </template>
    </TheNavbar>

    <div id="elements">
      <ConnectionsItem
        v-for="item in collections"
        :item="item"
        :activeLine="activeLine"
        :activeId="activeId"
        :key="item.id"
        @move="move"
        @removeCollection="removeCollection"
        @addLine="addLine"
        @removeLine="removeLine"
        @unitLine="unitLine"
      />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import ConnectionsItem from "@/components/Connections/ConnectionsItem.vue";
export default {
  components: { TheNavbar, ConnectionsItem },
  name: "Connection",
  data() {
    return {
      collections: [],
      activeLine: false,
      activeId: "",
    };
  },
  methods: {
    addCollection() {
      const id = Date.now();
      this.collections.push({
        id,
        classId: "element" + id,
        content: {
          title: "L5: Conv2D",
          paragraph: "32, [3,3], [1,1], same, relu",
        },
        lines: {
          lineTo: "",
          lineFrom: "",
        },
      });
    },

    removeCollection(id) {
      let lines = {};
      this.collections = this.collections
        .filter((element) => {
          if (element.classId.localeCompare(id) === 0) {
            lines = element.lines;
            return false;
          }
          return true;
        })
        .map((element) => {
          if (element.lines.lineTo.localeCompare(id) === 0)
            element.lines.lineTo = "";

          if (element.lines.lineFrom.localeCompare(id) === 0)
            element.lines.lineFrom = "";

          return element;
        });

      for (let key in lines)
        if (lines[key] && document.getElementById(`svg-${lines[key]}`))
          document.getElementById(`svg-${lines[key]}`).remove();
    },

    updateLine($elTo, $elFrom) {
      const coords = {
        x1: $elFrom.getBoundingClientRect().x,
        y1: $elFrom.getBoundingClientRect().y,
        x2: $elTo.getBoundingClientRect().x,
        y2: $elTo.getBoundingClientRect().y,
        width1: $elFrom.getBoundingClientRect().width,
        width2: $elTo.getBoundingClientRect().width,
      };

      let width = coords.x2 - coords.x1,
        height = coords.y2 - coords.y1;

      let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

      svg.setAttribute("width", width > 0 ? width : -width);
      svg.setAttribute("height", height > 0 ? height : -height);
      svg.setAttribute(
        "viewBox",
        `0 0  ${width > 0 ? width : -width} ${height > 0 ? height : -height}`
      );
      svg.setAttribute("id", "svg-" + $elFrom.id);

      svg.style.left = coords.width1 / 2 + "px";
      svg.style.top = "0px";
      svg.style.position = "absolute";
      svg.style.zIndex = -1;

      let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

      path.setAttribute("d", `M 0,0 L ${width},${height}`);
      path.setAttribute("stroke", "#304254");

      svg.appendChild(path);

      if (document.getElementById("svg-" + $elFrom.id))
        document.getElementById("svg-" + $elFrom.id).remove();

      document.getElementById($elFrom.id).appendChild(svg);
    },

    move({ event, item }) {
      const $el = event.target;

      let shiftX = event.offsetX;
      let shiftY = event.offsetY;

      const $elFrom = document.getElementById(item.lines.lineFrom);
      const $elTo = document.getElementById(item.lines.lineTo);

      document.onmousemove = (event) => {
        $el.parentNode.style.top = event.pageY - shiftY + "px";
        $el.parentNode.style.left = event.pageX - shiftX + "px";

        if ($elFrom) this.updateLine($el.parentNode, $elFrom);
        if ($elTo) this.updateLine($elTo, $el.parentNode);
      };

      document.onmouseup = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      };
    },

    addLine(id) {
      this.activeLine = true;
      this.activeId = id;
    },

    removeLine(id) {
      document.getElementById(`svg-${id}`).remove();

      this.collections = this.collections.map((element) => {
        if (element.lines.lineFrom.localeCompare(id) === 0)
          element.lines.lineFrom = "";

        if (element.classId.localeCompare(id) === 0) element.lines.lineTo = "";

        return element;
      });
    },

    unitLine(id) {
      this.collections = this.collections.map((element) => {
        if (element.classId.localeCompare(id) === 0)
          element.lines.lineFrom = this.activeId;
        else if (element.classId.localeCompare(this.activeId) === 0)
          element.lines.lineTo = id;

        return element;
      });

      const $elTo = document.getElementById(id);
      const $elFrom = document.getElementById(this.activeId);

      this.updateLine($elTo, $elFrom);
      this.activeLine = false;
      this.activeId = "";
    },
  },
};
</script>

<style scoped>
#elements {
  overflow: hidden;
  height: 100vh;
  position: relative;
}
</style>
